import { InnerBlocks } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { contentWidth, deskPadding, tabPadding, mobPadding, bgColor, bgImage, enableOverlay, overlayColor, opacity, horizontalPos, verticalPos, bgRepeat, bgSize } = attributes; 
    // bg repeat 
    const bgRepeatValue = bgRepeat ? 'repeat' : 'no-repeat';

    return(
        <div 
            className={ `${className} dpt-${deskPadding.top} dpb-${deskPadding.bottom} dpr-${deskPadding.right} dpl-${deskPadding.left} tpt-${tabPadding.top} tpb-${tabPadding.bottom} tpr-${tabPadding.right} tpl-${tabPadding.left} mpt-${mobPadding.top} mpb-${mobPadding.bottom} mpr-${mobPadding.right} mpl-${mobPadding.left}` }
            style={{
                backgroundColor: bgImage ? null : bgColor,
                backgroundImage: bgImage ? `url(${bgImage})` : null,
                backgroundSize: bgImage ? bgSize : null,
                backgroundPosition: bgImage ? `${horizontalPos}% ${verticalPos}%` : null,
                backgroundRepeat: bgImage ? bgRepeatValue : null,
            }}
        >
            {
                ( enableOverlay && bgImage ) &&
                <div 
                    className="overlay"
                    style={{
                        backgroundColor: enableOverlay ? overlayColor : 'transparent',
                        opacity: enableOverlay ? opacity : 0
                    }}
                ></div>
            }
            <div className="scbb-container" style={{ maxWidth: contentWidth }}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
export default Save; 