import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartModal from './components/CartModal';

const MY_STORE_NAME = "Z Shop";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const loadDataFromAPI = async () => {
            try {
                setLoading(true);
                const [productsRes, categoriesRes] = await Promise.all([
                    axios.get('https://fakestoreapi.com/products'),
                    axios.get('https://fakestoreapi.com/products/categories')
                ]);
                setProducts(productsRes.data);
                setCategories(categoriesRes.data);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Gagal memuat data produk. Pastikan koneksi internet aktif.");
            } finally {
                setLoading(false);
            }
        };
        loadDataFromAPI();
    }, []);

    const handleAddToCart = (e, product) => {
        if (e) e.stopPropagation();
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleUpdateQuantity = (id, amount) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity + amount;
                    return newQty > 0 ? { ...item, quantity: newQty } : item;
                }
                return item;
            })
        );
    };

    const handleRemoveFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const displayProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
    });

    if (loading) {
        return (
            <div style={styles.centerContainer}>
                <div style={styles.loadingText}>Memuat Katalog Produk...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={styles.centerContainer}>
                <p style={{ color: '#ff4d4f', marginBottom: '15px', fontWeight: '500' }}>{error}</p>
                <button onClick={() => window.location.reload()} style={styles.retryBtn}>Coba Lagi</button>
            </div>
        );
    }

    return (
        <div style={styles.appContainer}>
            <div style={styles.headerWrapper}>
                <Header
                    namaToko={MY_STORE_NAME}
                    cartCount={totalCartCount}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onCartClick={() => setIsCartOpen(true)}
                />
            </div>

            <div style={styles.mainContent}>
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <div style={styles.metaInfo}>
                    Menampilkan {displayProducts.length} produk pilihan
                </div>

                {displayProducts.length === 0 ? (
                    <div style={styles.emptyState}>
                        Produk yang Anda cari tidak tersedia.
                    </div>
                ) : (
                    <main style={styles.productGrid}>
                        {displayProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onOpenModal={setSelectedProduct}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </main>
                )}
            </div>

            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={(e, prod) => handleAddToCart(e, prod)}
            />

            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
            />
        </div>
    );
}

const styles = {
    appContainer: {
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden'
    },
    headerWrapper: {
        width: '100%',
        padding: '16px 24px',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff'
    },
    mainContent: {
        width: '100%',
        padding: '0 24px',
        boxSizing: 'border-box',
        marginTop: '10px'
    },
    metaInfo: {
        color: '#a0aec0',
        fontSize: '13px',
        margin: '15px 0 20px 0',
        fontWeight: '500'
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '24px',
        width: '100%',
        boxSizing: 'border-box'
    },
    emptyState: {
        textAlign: 'center',
        padding: '50px',
        color: '#a0aec0',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '15px'
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff'
    },
    loadingText: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#00aec5'
    },
    retryBtn: {
        padding: '10px 20px',
        backgroundColor: '#00aec5',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600'
    }
};

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    .product-card-item {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .product-card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
    }
  `;
    document.head.appendChild(styleSheet);
}

export default App;