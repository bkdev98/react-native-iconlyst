import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerLoveOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M14.355 21.75H8.032c-3.309 0-5.532-2.321-5.532-5.776V8.026c0-3.455 2.223-5.776 5.532-5.776h8.434C19.776 2.25 22 4.571 22 8.026v5.893c.003.82-.314 1.61-.883 2.2l-4.475 4.661a3.18 3.18 0 0 1-2.287.97m-6.323-18C5.583 3.75 4 5.428 4 8.026v7.948c0 2.6 1.583 4.276 4.032 4.276h6.323a1.68 1.68 0 0 0 1.2-.514l4.475-4.661c.3-.31.466-.725.465-1.156V8.026c0-2.6-1.583-4.276-4.034-4.276z"
    />
    <Path
      fill={props.color}
      d="M14.926 21.678a.75.75 0 0 1-.75-.75v-3.414a3.775 3.775 0 0 1 3.762-3.772h3.235a.75.75 0 1 1 0 1.5H17.94a2.273 2.273 0 0 0-2.264 2.272v3.414a.75.75 0 0 1-.75.75M9.782 12.978a.76.76 0 0 1-.36-.092c-.254-.14-2.49-1.41-3.059-3.218a2.633 2.633 0 0 1 1.583-3.4 2.57 2.57 0 0 1 1.834.116 2.54 2.54 0 0 1 1.838-.116 2.634 2.634 0 0 1 1.582 3.4c-.587 1.824-2.808 3.077-3.059 3.214a.75.75 0 0 1-.359.096m-1.07-5.33q-.159 0-.31.049a1.15 1.15 0 0 0-.609 1.517 5 5 0 0 0 1.99 2.138 5 5 0 0 0 1.99-2.14 1.15 1.15 0 0 0-.613-1.517 1.03 1.03 0 0 0-.93.157.75.75 0 0 1-.894 0c-.18-.133-.4-.204-.624-.203"
    />
  </Svg>
);
export default IconlystStickerLoveOutline;
