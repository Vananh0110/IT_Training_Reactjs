    import React, {useState} from 'react';


    const Header = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const handleInputChange = (e) => {
            const {value} = e.target;
            setSearchQuery(value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsLoading(true);
        }

        const handleReset = () => {
            setSearchQuery('');
            setIsLoading(false);
        }

        return (
            <>
            <header className="header">
                <p className="header__logo">
                    <a href="https://algolia.com" aria-label="Go to the Algolia website">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 117"><path fill="#FFF" d="M249.5 64.2V1.4c0-.9-.7-1.5-1.6-1.4L236.2 2a1.4 1.4 0 0 0-1.2 1.3V67c0 3 0 21.6 22.4 22.3a1.4 1.4 0 0 0 1.5-1.4v-9.5c0-.7-.6-1.3-1.2-1.4-8.2-.9-8.2-11-8.2-12.7ZM443.5 24.4h-11.8c-.8 0-1.4.6-1.4 1.4v62c0 .8.6 1.4 1.4 1.4h11.8c.8 0 1.4-.6 1.4-1.4v-62c0-.8-.6-1.4-1.4-1.4ZM431.7 16.6h11.8c.8 0 1.4-.6 1.4-1.3v-14c0-.8-.7-1.4-1.6-1.3L431.5 2a1.4 1.4 0 0 0-1.2 1.3v12c0 .8.6 1.4 1.4 1.4Zm-20.5 47.6V1.4c0-.9-.7-1.5-1.5-1.4L397.9 2a1.4 1.4 0 0 0-1.2 1.3V67c0 3 0 21.6 22.4 22.3a1.4 1.4 0 0 0 1.5-1.4v-9.5c0-.7-.5-1.3-1.2-1.4-8.2-.9-8.2-11-8.2-12.7Zm-30.7-31c-2.6-2.8-5.8-5-9.6-6.5a31.7 31.7 0 0 0-12-2.3c-4.5 0-8.5.7-12.2 2.3A27.9 27.9 0 0 0 331 43.5a39.6 39.6 0 0 0 0 26.3c1.5 4 3.6 7.5 6.2 10.3 2.6 2.9 5.8 5 9.5 6.7a38 38 0 0 0 12.2 2.4c2.8 0 8.6-.9 12.3-2.4a27 27 0 0 0 9.5-6.7 35.1 35.1 0 0 0 8.3-23c0-4.9-.8-9.6-2.4-13.6-1.5-4-3.5-7.4-6.1-10.2ZM370 71.5a13.1 13.1 0 0 1-11.2 5.6 13 13 0 0 1-11.2-5.6c-2.7-3.6-4-7.9-4-14.2 0-6.3 1.3-11.5 4-15.1a13 13 0 0 1 11.1-5.5 13 13 0 0 1 11.3 5.5c2.6 3.6 4 8.8 4 15 0 6.4-1.3 10.6-4 14.3Zm-161.6-47H197a32 32 0 0 0-27 15 33.8 33.8 0 0 0 8.9 45.9 18.8 18.8 0 0 0 11.2 3.1H191.2l.6-.2h.2a21 21 0 0 0 16.5-14.6V87c0 .8.6 1.4 1.4 1.4h11.7c.8 0 1.4-.6 1.4-1.4V25.8c0-.8-.6-1.4-1.4-1.4h-13Zm0 48.3a17.8 17.8 0 0 1-10.4 3.5h-.2a12.5 12.5 0 0 1-.7 0A18.4 18.4 0 0 1 180.4 51c2.7-6.8 9-11.6 16.6-11.6h11.5v33.3Zm289-48.3H486a32 32 0 0 0-27 15 33.8 33.8 0 0 0 8.8 45.9 18.8 18.8 0 0 0 11.3 3.1h1.1l.6-.2h.2a21 21 0 0 0 16.5-14.6V87c0 .8.6 1.4 1.4 1.4h11.7c.8 0 1.4-.6 1.4-1.4V25.8c0-.8-.6-1.4-1.4-1.4h-13.1Zm0 48.3a17.8 17.8 0 0 1-10.5 3.5h-.9A18.4 18.4 0 0 1 469.4 51c2.6-6.8 9-11.6 16.6-11.6h11.5v33.3ZM306.3 24.4h-11.5a32 32 0 0 0-27 15 33.7 33.7 0 0 0-5.1 14.6 34.6 34.6 0 0 0 0 7.6c1 8.9 5.4 16.7 11.8 22a19.5 19.5 0 0 0 2.2 1.7 18.8 18.8 0 0 0 21.6-.6c3.8-2.7 6.7-6.7 8-11.1V87.9c0 5-1.3 8.9-4 11.5-2.7 2.6-7.3 3.9-13.6 3.9-2.6 0-6.7-.2-10.9-.6a1.4 1.4 0 0 0-1.4 1l-3 10a1.4 1.4 0 0 0 1.1 1.8c5 .7 10 1 12.8 1 11.4 0 19.8-2.4 25.3-7.4 5-4.6 7.8-11.4 8.2-20.7V25.8c0-.8-.6-1.4-1.3-1.4h-13.2Zm0 15s.2 32.4 0 33.4a17.5 17.5 0 0 1-10 3.4h-.2a13.6 13.6 0 0 1-1.7 0A18.7 18.7 0 0 1 278.3 51c2.6-6.8 9-11.6 16.5-11.6h11.5ZM58.2 0A58.3 58.3 0 1 0 86 109.5c.9-.5 1-1.6.3-2.2l-5.5-4.9a3.8 3.8 0 0 0-4-.6A47 47 0 0 1 11 57.5 47.3 47.3 0 0 1 58.2 11h47.3v84L78.7 71.2a2 2 0 0 0-3 .3 22 22 0 1 1 4.4-15.2 4 4 0 0 0 1.3 2.6l7 6.2c.8.7 2 .3 2.3-.8a33 33 0 0 0-30.4-39 33 33 0 0 0-35 32 33.3 33.3 0 0 0 32.2 33.9 32.8 32.8 0 0 0 20-6.3l35.1 31c1.5 1.4 3.9.3 3.9-1.7V2.2a2.2 2.2 0 0 0-2.2-2.2h-56Z"></path>
                        </svg>
                    </a>
                </p>
                <p className="header__title">
                    Stop looking for an item — find it.
                </p>
                <div className="searchbox">
                    <form action className="searchbox-form" onSubmit={handleSubmit} onReset={handleReset} noValidate>
                        <input 
                            type="search"
                            className="searchbox-input"
                            autoComplete="off" autoCorrect="off"
                            autocapitalize="off"
                            placeholder="Product, brand, color, ..."
                            onChange={handleInputChange}
                            value={searchQuery}
                            spellCheck="false" />
                        <button type="submit" className="searchbox-submit" title="Submit the search query">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" aria-hidden="true"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)"><circle cx="7.11" cy="7.11" r="7.11"></circle><path d="M16 16l-3.87-3.87"></path></g></svg>
                        </button>
                        <button className={`searchbox-reset ${searchQuery.length > 0 ? '' : 'hidden'}`} type="reset" title="Clear the search query"><svg class="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10" aria-hidden="true"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path></svg></button>
                        <span className={`searchbox-loadingIndicator ${isLoading && searchQuery ? '' : 'hidden'}`} hidden>
                            <svg width="16" height="16" viewBox="0 0 38 38" stroke="#444" class="ais-SearchBox-loadingIcon" aria-hidden="true">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18">
                                        </circle>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </form>
                </div>
            </header>
            </>
        )
    }

    export default Header;

