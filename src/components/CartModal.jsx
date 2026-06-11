import React from 'react';

function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
    if (!isOpen) return null;

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.sidebar} onClick={(e) => e.stopPropagation()}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Keranjang Belanja</h2>
                    <button style={styles.closeBtn} onClick={onClose}>×</button>
                </div>

                <div style={styles.itemList}>
                    {cartItems.length === 0 ? (
                        <div style={styles.emptyText}>Keranjang kosong. Yuk isi dengan produk premium pilihanmu!</div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} style={styles.cartCard}>
                                <img src={item.image} alt={item.title} style={styles.itemImg} />
                                <div style={styles.itemInfo}>
                                    <h4 style={styles.itemTitle}>{item.title}</h4>
                                    <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>

                                    <div style={styles.controlRow}>
                                        <div style={styles.qtyContainer}>
                                            <div style={styles.qtyBtn} onClick={() => onUpdateQuantity(item.id, -1)}>-</div>
                                            <span style={styles.qtyText}>{item.quantity}</span>
                                            <div style={styles.qtyBtn} onClick={() => onUpdateQuantity(item.id, 1)}>+</div>
                                        </div>
                                        <button style={styles.deleteBtn} onClick={() => onRemove(item.id)}>Hapus</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div style={styles.footer}>
                        <div style={styles.totalRow}>
                            <span>Total Pembayaran:</span>
                            <span style={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button style={styles.checkoutBtn} onClick={() => alert('Terima kasih sudah berbelanja di Z Shop!')}>
                            Checkout Sekarang
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
        boxSizing: 'border-box'
    },
    sidebar: {
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        boxSizing: 'border-box'
    },
    header: {
        padding: '20px',
        borderBottom: '1px solid #f1f5f9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    title: { margin: 0, fontSize: '18px', color: '#00aec5', fontWeight: '700' },
    closeBtn: { background: 'none', border: 'none', fontSize: '26px', cursor: 'pointer', color: '#94a3b8' },
    itemList: { padding: '20px', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' },
    emptyText: { textAlign: 'center', color: '#94a3b8', marginTop: '40px', fontSize: '14px' },
    cartCard: { display: 'flex', gap: '12px', borderBottom: '1px solid #f8fafc', paddingBottom: '16px', alignItems: 'center', boxSizing: 'border-box' },
    itemImg: { width: '60px', height: '60px', objectFit: 'contain', backgroundColor: '#f8fafc', padding: '4px', borderRadius: '8px', flexShrink: 0 },
    itemInfo: { flexGrow: 1, boxSizing: 'border-box' },
    itemTitle: { margin: '0 0 4px 0', fontSize: '13px', color: '#1e293b', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden' },
    itemPrice: { margin: '0 0 8px 0', fontSize: '14px', fontWeight: '700', color: '#00aec5' },
    controlRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', boxSizing: 'border-box' },
    qtyContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: '6px',
        padding: '2px',
        boxSizing: 'border-box'
    },
    qtyBtn: {
        width: '28px',
        height: '28px',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '700',
        color: '#00aec5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        userSelect: 'none'
    },
    qtyText: {
        padding: '0 10px',
        fontSize: '14px',
        fontWeight: '700',
        color: '#1e293b',
        minWidth: '20px',
        textAlign: 'center',
        userSelect: 'none'
    },
    deleteBtn: { background: 'none', border: 'none', color: '#ff4d4f', fontSize: '12px', fontWeight: '600', cursor: 'pointer' },
    footer: { padding: '20px', borderTop: '1px solid #f1f5f9', backgroundColor: '#fff', boxSizing: 'border-box' },
    totalRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', fontWeight: '600', marginBottom: '15px', color: '#1e293b' },
    totalPrice: { fontSize: '18px', fontWeight: '800', color: '#00aec5' },
    checkoutBtn: { width: '100%', padding: '12px', backgroundColor: '#00aec5', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }
};

export default CartModal;