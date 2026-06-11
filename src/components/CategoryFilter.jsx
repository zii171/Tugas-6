import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory, sortBy, setSortBy }) {
    const translateCategory = (cat) => {
        if (cat === "electronics") return "Elektronik";
        if (cat === "jewelery") return "Perhiasan";
        if (cat === "men's clothing") return "Pakaian Pria";
        if (cat === "women's clothing") return "Pakaian Wgit --versionanita";
        return cat;
    };

    return (
        <div style={styles.filterSortRow}>
            <div style={styles.categoryContainer}>
                <button
                    onClick={() => setSelectedCategory('all')}
                    style={selectedCategory === 'all' ? styles.activeFilterBtn : styles.filterBtn}
                >
                    Semua Produk
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={selectedCategory === cat ? styles.activeFilterBtn : styles.filterBtn}
                    >
                        {translateCategory(cat)}
                    </button>
                ))}
            </div>

            <div style={styles.selectWrapper}>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={styles.selectDropdown}>
                    <option value="default">Urutan: Default</option>
                    <option value="price-asc">Harga: Rendah ke Tinggi</option>
                    <option value="price-desc">Harga: Tinggi ke Rendah</option>
                </select>
            </div>
        </div>
    );
}

const styles = {
    filterSortRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%',
        boxSizing: 'border-box'
    },
    categoryContainer: {
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    filterBtn: {
        padding: '8px 16px',
        border: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '13px',
        color: '#64748b',
        fontWeight: '500',
        outline: 'none'
    },
    activeFilterBtn: {
        padding: '8px 16px',
        border: '1px solid #00aec5',
        backgroundColor: '#00aec5',
        color: '#ffffff',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: '600',
        outline: 'none'
    },
    selectWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    selectDropdown: {
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        backgroundColor: '#ffffff',
        fontSize: '13px',
        color: '#475569',
        cursor: 'pointer',
        outline: 'none',
        minWidth: '160px'
    }
};

export default CategoryFilter;