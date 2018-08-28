import React from 'react';
import { translate } from 'react-i18next';

const OptionsImage3x = ({ block, t, onFileChange, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{t("Custom style")} <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>
					{t("URL")} 1:
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, 0, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>{t("Link")} 1: <input type="text" value={block.options.elements[0].link} onChange={(e) => onPropChange('link', e.target.value, false, 0)} /></label>
			</div>
			<hr />
			<div>
				<label>
					{t("URL")} 2:
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, 1, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} />
				</label>
			</div>
			<div>
				<label>{t("Link")} 2: <input type="text" value={block.options.elements[1].link} onChange={(e) => onPropChange('link', e.target.value, false, 1)} /></label>
			</div>
			<hr />
			<div>
				<label>
					{t("URL")} 3:
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, 2, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[2].source} onChange={(e) => onPropChange('source', e.target.value, false, 2)} />
				</label>
			</div>
			<div>
				<label>{t("Link")} 3: <input type="text" value={block.options.elements[2].link} onChange={(e) => onPropChange('link', e.target.value, false, 2)} /></label>
			</div>
			<div>
				<label>{t("Add paddings")} <input type="checkbox" checked={block.options.container.usePadding? 'checked': ''} onChange={(e) => onPropChange('usePadding', !block.options.container.usePadding, true)} /></label>
			</div>
			<div>
				<label>{t("Border radius")} <input type="text" value={block.options.elements[0].borderRadius} onChange={(e) => onPropChange('borderRadius', e.target.value, false, 0)} /></label>
			</div>
			<hr />
			<div>
				<label>{t("Background")} <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default translate('translations')(OptionsImage3x);
