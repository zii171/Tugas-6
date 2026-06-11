import React from 'react';

function ProductDetailModal({ product, onClose, onAddToCart }) {
    if (!product) return null;

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeModalBtn} onClick={onClose}>×</button>

                <div style={styles.modalBody}>
                    <div style={styles.modalImageSection}>
                        <img src={product.image} alt={product.title} style={styles.modalImage} />
                    </div>
                    <div style={styles.modalDetailSection}>
                        <h2 style={styles.modalTitle}>{product.title}</h2>

                        <div style={styles.modalRating}>
                            <span style={{ color: '#ffc400' }}>★ {product.rating?.rate}</span>
                            <span style={{ color: '#64748b', marginLeft: '6px', fontSize: '12px' }}>({product.rating?.count} Ulasan)</span>
                        </div>

                        <h3 style={styles.modalPrice}>${product.price.toFixed(2)}</h3>

                        <div style={styles.descriptionBox}>
                            <h4 style={{ margin: '0 0 6px 0', color: '#1e293b', fontSize: '14px', fontWeight: '700' }}>Detail Produk</h4>
                            <p style={styles.modalDescription}>{product.description}</p>
                        </div>

                        <button
                            onClick={(e) => {
                                onAddToCart(e, product);
                                onClose();
                            }}
                            style={styles.modalAddBtn}
                        >
                            + Tambah Ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px'
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '700px',
        padding: '24px',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        boxSizing: 'border-box'
    },
    closeModalBtn: {
        position: 'absolute',
        top: '15px',
        right: '20px',
        fontSize: '28px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#cbd5e1'
    },
    modalBody: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '24px'
    },
    modalImageSection: {
        flex: '1 1 220px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '1px solid #f1f5f9',
        borderRadius: '12px',
        padding: '15px'
    },
    modalImage: {
        maxWidth: '100%',
        maxHeight: '240px',
        objectFit: 'contain'
    },
    modalDetailSection: {
        flex: '1 2 320px',
        display: 'flex',
        flexDirection: 'column'
    },
    modalTitle: {
        margin: '0 0 6px 0',
        fontSize: '18px',
        color: '#1e293b',
        fontWeight: '700',
        lineHeight: '1.4'
    },
    modalRating: {
        marginBottom: '15px',
        fontSize: '13px',
        fontWeight: '600'
    },
    modalPrice: {
        fontSize: '24px',
        color: '#00aec5',
        margin: '0 0 15px 0',
        fontWeight: '800'
    },
    descriptionBox: {
        backgroundColor: '#f8fafc',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #f1f5f9'
    },
    modalDescription: {
        fontSize: '13px',
        color: '#475569',
        margin: 0,
        lineHeight: '1.5'
    },
    modalAddBtn: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#00aec5',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '700',
        cursor: 'pointer',
        marginTop: 'auto'
    }
};

export default ProductDetailModal;