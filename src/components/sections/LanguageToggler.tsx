import React, { useContext } from 'react';
import { LocalizationContext } from '../../localization/provider';
import { languageMap } from '../../localization/reducer';

const langs = ['EN', 'VN']

const LanguageIcon = ({ DataIcon, id, onClick }) => {
    return (
        <div style={{ display: "inline" }}>
            <span
                onClick={onClick}
                data-inline="false"
                id={id}
            >
                <DataIcon />
            </span>
        </div>
    );
}


const LanguageToggler = () => {
    const { localizationStore: [state, dispatch] } = useContext(LocalizationContext);

    return (
        <div>
            {
                langs.map((lang: string) => {
                    const { dataIcon: DataIcon, id } = languageMap[lang];
                    return (
                        <LanguageIcon
                            key={id}
                            DataIcon={DataIcon}
                            id={id}
                            onClick={() => {
                                dispatch({ type: 'LANGUAGE_UPDATE', id })
                            }
                            }
                        />
                    )
                })
            }
        </div>
    )
}

export default LanguageToggler;
