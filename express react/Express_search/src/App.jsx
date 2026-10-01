import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchDownload = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);

        try {
            const url = `http://localhost:3000/api/download?search=${encodeURIComponent(query)}`;
            const response = await fetch(url, { method: 'GET' });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Server error');
            }

            const disposition = response.headers.get('content-disposition');
            let filename = 'downloaded_package.zip';
            if (disposition && disposition.indexOf('attachment') !== -1) {
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                const matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) { 
                    filename = matches[1].replace(/['"]/g, '');
                }
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);

        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const styles = {
        container: {
            background: '#ffffff',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            width: '100%',
            maxWidth: '480px',
            border: '1px solid #e2e8f0',
            fontFamily: "'Inter', sans-serif",
            color: '#0f172a'
        },
        heading: {
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '8px'
        },
        text: {
            color: '#64748b',
            fontSize: '0.875rem',
            marginBottom: '24px'
        },
        searchBox: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
        },
        searchIcon: {
            position: 'absolute',
            left: '16px',
            color: '#64748b',
            fontSize: '1.1rem',
            pointerEvents: 'none'
        },
        searchInput: {
            width: '100%',
            padding: '14px 16px 14px 48px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            fontSize: '1rem',
            color: '#0f172a',
            backgroundColor: '#f8fafc',
            outline: 'none'
        },
        downloadBtn: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '14px 24px',
            fontSize: '1rem',
            fontWeight: 500,
            borderRadius: '12px',
            cursor: 'pointer',
            opacity: isLoading ? 0.7 : 1
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Find & Get Files</h2>
            <p style={styles.text}>Search for document databases or download the complete bundle directly.</p>

            <div style={styles.searchBox}>
                <i className="fa-solid fa-magnifying-glass" style={styles.searchIcon}></i>
                <input 
                    type="text" 
                    className="search-input" 
                    style={styles.searchInput}
                    placeholder="Search files, reports, assets..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <button 
                style={styles.downloadBtn} 
                onClick={handleDownload}
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        Downloading...
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-arrow-down-to-bracket"></i>
                        Download Package
                    </>
                )}
            </button>
        </div>
    );
};

export default SearchDownload;
