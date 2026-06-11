import React from 'react';
import SearchBar from './SearchBar';

function Header({ namaToko, cartCount, searchTerm, setSearchTerm, onCartClick }) {
    return (
        <header style={styles.header}>
            <div style={styles.logoArea}>
                <h1 style={styles.brandTitle}>{namaToko}</h1>
            </div>

            <div style={styles.searchContainer}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div style={styles.cartContainer} onClick={onCartClick}>
                <div style={styles.cartIconWrapper}>
                    <span style={{ fontSize: '26px' }}>🛒</span>
                    {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
                </div>
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        gap: '30px',
        width: '100%',
        boxSizing: 'border-box'
    },
    logoArea: {
        flexShrink: 0
    },
    brandTitle: {
        margin: 0,
        fontSize: '26px',
        color: '#00aec5',
        fontWeight: '800',
        letterSpacing: '-0.5px'
    },
    searchContainer: {
        flexGrow: 1,
        maxWidth: '650px'
    },
    cartContainer: {
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        cursor: 'pointer'
    },
    cartIconWrapper: {
        position: 'relative',
        padding: '4px'
    },
    cartBadge: {
        position: 'absolute',
        top: '-5px',
        right: '-8px',
        backgroundColor: '#ff4d4f',
        color: '#ffffff',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '10px',
        fontWeight: '700',
        border: '2px solid #ffffff'
    }
};

export default Header;