import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { addImage, stylizeBlock } from '../actions';

import OptionsHr from '../components/options/OptionsHr';
import OptionsText from '../components/options/OptionsText';
import OptionsImage from '../components/options/OptionsImage';
import OptionsPosts from '../components/options/OptionsPosts';
import Options3Icons from '../components/options/Options3Icons';
import OptionsVideo from '../components/options/OptionsVideo';
import OptionsButton from '../components/options/OptionsButton';
import OptionsHeader from '../components/options/OptionsHeader';
import OptionsSocial from '../components/options/OptionsSocial';
import OptionsText2x from '../components/options/OptionsText2x';
import OptionsImage2x from '../components/options/OptionsImage2x';
import OptionsImage3x from '../components/options/OptionsImage3x';
import OptionsFeedback from '../components/options/OptionsFeedback';
import OptionsImageText from '../components/options/OptionsImageText';
import OptionsSocialText from '../components/options/OptionsSocialText';
import OptionsFeedbackText from '../components/options/OptionsFeedbackText';

const mapStateToProps = (state) => {
    return {
        tabs: state.tabs,
        language: state.language,
        template: state.template
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFileChange: (block, index, file) => {
            dispatch(addImage(block, index, file));
        },
        onPropChange: (prop, val, container, elementIndex) => {
            dispatch(stylizeBlock(prop, val, container, elementIndex));
        }
    };
};

const Options = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ tabs, t, template, onFileChange, onPropChange }) => {
    if (tabs.options) {
        const block = template.filter(b => b.selected)[0];
        if (!block) return <div><label>{t("Nothing selected")}</label></div>;
        switch (block.block_type) {
            case 'hr':
                return <OptionsHr block={block} onPropChange={onPropChange} />;
            case 'text':
                return <OptionsText block={block} onPropChange={onPropChange} />;
            case 'image':
                return <OptionsImage block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case '3_icons':
                return <Options3Icons block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case 'posts':
                return <OptionsPosts block={block} onPropChange={onPropChange} />;
            case 'posts_title':
                return <OptionsPosts block={block} onPropChange={onPropChange} />;
            case 'video':
                return <OptionsVideo block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case 'button':
                return <OptionsButton block={block} onPropChange={onPropChange} />;
            case 'header':
                return <OptionsHeader block={block} onPropChange={onPropChange} />;
            case 'social':
                return <OptionsSocial block={block} onPropChange={onPropChange} />;
            case 'text2x':
                return <OptionsText2x block={block} onPropChange={onPropChange} />;
            case 'image2x':
                return <OptionsImage2x block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case 'image3x':
                return <OptionsImage3x block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case 'feedback':
                return <OptionsFeedback block={block} onPropChange={onPropChange} />;
            case 'image_text':
                return <OptionsImageText block={block} onFileChange={onFileChange} onPropChange={onPropChange} />;
            case 'social_text':
                return <OptionsSocialText block={block} onPropChange={onPropChange} />;
            case 'feedback_text':
                return <OptionsFeedbackText block={block} onPropChange={onPropChange} />;
            default:
                return <div><label>{t("Nothing selected")}</label></div>;
        }
    }
    return null;
});

export default translate('translations')(Options);
