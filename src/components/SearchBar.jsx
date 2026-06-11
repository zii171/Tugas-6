import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div style={styles.wrapper}>
            <input
                type="text"
                placeholder="Cari produk impian Anda di sini..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
            />
            <button style={styles.searchButton}>
                <span style={styles.icon}>🔍</span>
            </button>
        </div>
    );
}

const styles = {
    wrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        overflow: 'hidden',
        boxSizing: 'border-box'
    },
    searchInput: {
        width: '100%',
        padding: '12px 60px 12px 16px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '14px',
        color: '#1e293b',
        outline: 'none',
        boxSizing: 'border-box'
    },
    searchButton: {
        position: 'absolute',
        right: '0',
        top: '0',
        bottom: '0',
        width: '48px',
        backgroundColor: '#00aec5',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    icon: {
        color: '#ffffff',
        fontSize: '15px'
    }
};

export default SearchBar;