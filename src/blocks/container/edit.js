import { InnerBlocks, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, ButtonGroup, ColorPalette, PanelBody, SelectControl, RangeControl, ToggleControl, __experimentalBoxControl as BoxControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import colors from '../colors';

// responsive padding
function openDevice(device) {
	let i, tab;
	tab = document.getElementsByClassName("zgbTabContent");
	for (i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";
	}
	document.getElementById(device).style.display = "block";
}

const edit = ({ className, attributes, setAttributes }) => {
    const { contentWidth, deskPadding, tabPadding, mobPadding, pressed, notPressed, bgColor, bgImage, enableOverlay, overlayColor, opacity, horizontalPos, verticalPos, bgRepeat, bgSize } = attributes; 

    // bg repeat 
    const bgRepeatValue = bgRepeat ? 'repeat' : 'no-repeat';

    return (
        <Fragment>
            <InspectorControls>        
                <PanelBody 
                    title={__("Container Options")}
                    initialOpen= { true }
                >
                    <p className="mb15">
                        <UnitControl 
                            label={__("Content Maximum Width")}
                            onChange={ (contentWidth) => setAttributes({ contentWidth }) }
                            value={ contentWidth }
                            units={ [] }
                        />
                    </p>
                    <div className="zgb__container">
                        <div className=" zgb__devices__wrapper">
                            <p className="m0"><strong>{__("Container Padding")}</strong></p>
                            <div className="devices__list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openDevice('desktop') }></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openDevice('tablet') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openDevice('mobile') }></span>
                            </div>
                        </div>
                        <div className="zgb__content__wrapper">
                            <div id="desktop" className="zgbTabContent" style={{ display: 'block' }}>
                                <BoxControl
                                    values={ deskPadding }
                                    label={ __( "Desktop Padding" ) }
                                    allowReset={ false }
                                    units={ [] }
                                    onChange={ 
                                        ( newValue ) => setAttributes({
                                            ...deskPadding,
                                            deskPadding: {
                                                top: newValue.top,
                                                left: newValue.left,
                                                right: newValue.right,
                                                bottom: newValue.bottom,
                                            } 
                                        })
                                    }
                                />
                            </div>
                            <div id="tablet" className="zgbTabContent">
                                <BoxControl
                                    values={ tabPadding }
                                    label={ __( "Tablet Padding" ) }
                                    allowReset={ false }
                                    units={ [] }
                                    onChange={ 
                                        ( newValue ) => setAttributes({
                                            ...tabPadding,
                                            tabPadding: {
                                                top: newValue.top,
                                                left: newValue.left,
                                                right: newValue.right,
                                                bottom: newValue.bottom,
                                            } 
                                        })
                                    }
                                />
                            </div>
                            <div id="mobile" className="zgbTabContent">
                                <BoxControl
                                    values={ mobPadding }
                                    label={ __( "Mobile Padding" ) }
                                    allowReset={ false }
                                    units={ [] }
                                    onChange={ 
                                        ( newValue ) => setAttributes({
                                            ...mobPadding,
                                            mobPadding: {
                                                top: newValue.top,
                                                left: newValue.left,
                                                right: newValue.right,
                                                bottom: newValue.bottom,
                                            } 
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <p className='bold-weight'>{__("Select Background Type")}</p>
                    <ButtonGroup className="mb15">
                        <Button 
                            isSmall = { true }
                            isPressed={ pressed }
                            onClick={ () => setAttributes({ 
                                pressed: !pressed, 
                                notPressed: !notPressed, 
                                bgImage: null
                            }) }
                        >
                            {__("Color")}
                        </Button>
                        <Button 
                            isSmall = { true }
                            isPressed={ notPressed }
                            onClick={ () => setAttributes({ 
                                pressed: !pressed, 
                                notPressed: !notPressed,
                                bgColor: null
                            }) }
                        >
                            {__("Image")}
                        </Button>
                    </ButtonGroup>
                    {
                        pressed &&
                        <ColorPalette
                            colors={ colors }
                            onChange={ ( bgColor ) => setAttributes( { bgColor } ) }
                            value={ bgColor }
                        />
                    }
                    {
                        notPressed &&
                        <Fragment>
                            {
                                bgImage ?
                                <div className="image-preview" style={{ marginBottom: 15 + 'px' }}>
                                    <img src={ bgImage } />
                                    <span class="dashicons dashicons-remove" onClick={() => setAttributes({ bgImage: null })}></span>
                                </div>
                                :
                                <MediaUpload
                                    onSelect={ (newImage) => setAttributes({ bgImage: newImage.sizes.full.url }) }
                                    type="image"
                                    value={ bgImage }
                                    render={ ( { open } ) => (
                                        <Button
                                            style={{ border: `1px solid #ccc`, display: 'block' }}
                                            icon="upload"
                                            onClick={ open }>
                                            {__("Upload")}
                                        </Button>
                                    )}
                                />
                            }

                            <p style={{ marginTop: 15 + 'px' }} className='bold-weight'>{__('Background Positions')}</p>
                            <RangeControl
                                label={ __( "Horizontal Position" ) }
                                value={ horizontalPos }
                                onChange={ ( horizontalPos ) => setAttributes( { horizontalPos } ) }
                                min={ -100 }
                                max={ 100 }
                                help={ `${horizontalPos}% along X direction` }
                            />
                            <RangeControl
                                label={ __( "Vertical Position" ) }
                                value={ verticalPos }
                                onChange={ ( verticalPos ) => setAttributes( { verticalPos } ) }
                                min={ -100 }
                                max={ 100 }
                                help={ `${verticalPos}% along X direction` }
                            />
                            <p style={{ marginTop: 15 + 'px' }} className='bold-weight'>{__('Background Size')}</p>
                            <SelectControl
                                label={ __( "Background Size" ) }
                                value={ bgSize }
                                options={ [
                                    { label: __('Auto'), value: 'auto' },
                                    { label: __('Cover'), value: 'cover' },
                                    { label: __('Contain'), value: 'contain' },
                                ] }
                                onChange={ ( bgSize ) => { setAttributes( { bgSize } ) } }
                            />
                            <ToggleControl
                                label="Background Repeat"
                                checked={ bgRepeat }
                                onChange={ () => setAttributes ({ bgRepeat: ! bgRepeat }) }
                            />
                            <ToggleControl
                                label="Enable Overlay"
                                checked={ enableOverlay }
                                onChange={ () => setAttributes ({ enableOverlay: ! enableOverlay }) }
                            />
                            {
                                enableOverlay &&
                                <Fragment>
                                    <p>{__("Overlay Color")}</p>
                                    <ColorPalette
                                        colors={ colors }
                                        onChange={ ( overlayColor ) => setAttributes( { overlayColor } ) }
                                        value={ overlayColor }
                                    />
                                    <RangeControl
                                        label={ __( "Overlay Opacity" ) }
                                        value={ opacity }
                                        onChange={ ( opacity ) => setAttributes( { opacity } ) }
                                        min={ 0.1 }
                                        max={ 1 }
                                        step={ 0.01 }
                                    />
                                </Fragment>
                            }
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
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
                    <InnerBlocks
                        allowedBlocks={ true }
                        renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
                    />
                </div>
            </div>
        </Fragment>
    );
}
export default edit;