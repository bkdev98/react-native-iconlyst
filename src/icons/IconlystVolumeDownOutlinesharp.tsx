import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.843 7.472.372.65a8.79 8.79 0 0 1 0 8.758l-.374.65-1.3-.746.373-.65a7.29 7.29 0 0 0 0-7.266l-.373-.651zM13.096 4.237H14.9v16.526h-1.805L8.97 17.186H4.12l-.001-.749q-.005-3.938 0-7.874v-.75h4.85zm.305 1.72L9.529 9.315H5.618a4800 4800 0 0 0 0 6.372h3.911l3.872 3.356z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeDownOutlinesharp;
