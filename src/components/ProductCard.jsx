import React from 'react';

function ProductCard({ product, onOpenModal, onAddToCart }) {
    return (
        <div className="product-card-item" style={styles.card} onClick={() => onOpenModal(product)}>
            <div style={styles.imageWrapper}>
                <img src={product.image} alt={product.title} style={styles.productImage} />
            </div>
            <div style={styles.cardInfo}>
                <h3 style={styles.productTitle}>{product.title}</h3>

                <div style={styles.ratingRow}>
                    <span style={styles.starIcon}>★</span>
                    <span style={styles.ratingText}>{product.rating?.rate || 0}</span>
                    <span style={styles.ratingCount}> | Terjual {product.rating?.count || 0}</span>
                </div>

                <div style={styles.cardFooter}>
                    <span style={styles.productPrice}>${product.price.toFixed(2)}</span>
                    <button
                        onClick={(e) => onAddToCart(e, product)}
                        style={styles.addToCartBtn}
                    >
                        + Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
    },
    imageWrapper: {
        width: '100%',
        height: '220px',
        backgroundColor: '#f1f5f9',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box'
    },
    productImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
    },
    cardInfo: {
        padding: '12px 4px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxSizing: 'border-box'
    },
    productTitle: {
        fontSize: '14px',
        margin: '0 0 6px 0',
        color: '#1e293b',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        height: '38px',
        lineHeight: '1.4',
        fontWeight: '600'
    },
    ratingRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        margin: '4px 0 12px 0'
    },
    starIcon: { color: '#ffc400', fontSize: '13px' },
    ratingText: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
    ratingCount: { color: '#64748b', fontSize: '12px' },
    cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto'
    },
    productPrice: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1e293b'
    },
    addToCartBtn: {
        padding: '6px 12px',
        backgroundColor: 'transparent',
        color: '#00aec5',
        border: '1px solid #00aec5',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '700',
        cursor: 'pointer'
    }
};

export default ProductCard;