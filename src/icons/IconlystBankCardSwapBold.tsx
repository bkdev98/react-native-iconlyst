import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSwapBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.541 14.706c-.026.17.113.314.284.314h9.43c.171 0 .31-.144.284-.314-.192-1.26-1.155-2.106-2.459-2.106H5c-1.304 0-2.266.847-2.459 2.106M2.5 18.52c0 1.53 1.03 2.6 2.5 2.6h5.08c1.47 0 2.5-1.07 2.5-2.6v-1.7a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3zM21.459 4.986c.025.17-.113.313-.284.313h-9.43c-.171 0-.31-.144-.284-.313.192-1.26 1.155-2.107 2.459-2.107H19c1.304 0 2.266.848 2.459 2.107M21.2 6.8a.3.3 0 0 1 .3.3v1.7c0 1.53-1.03 2.6-2.5 2.6h-5.08c-1.47 0-2.5-1.07-2.5-2.6V7.1a.3.3 0 0 1 .3-.3zM21.528 15.917l-1.359-1.35a.75.75 0 0 0-1.057 0l-1.358 1.35a.75.75 0 1 0 1.056 1.064l.08-.078v.317a2.65 2.65 0 0 1-2.647 2.65.75.75 0 0 0 0 1.5 4.15 4.15 0 0 0 4.146-4.15v-.32l.082.081a.751.751 0 0 0 1.057-1.064M4.36 9.65c.198 0 .39-.08.53-.22l1.358-1.36a.75.75 0 1 0-1.06-1.061l-.079.079v-.31a2.65 2.65 0 0 1 2.646-2.65.75.75 0 1 0 0-1.5 4.15 4.15 0 0 0-4.146 4.15v.31l-.079-.08A.75.75 0 1 0 2.47 8.07l1.36 1.36c.14.14.33.22.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardSwapBold;
