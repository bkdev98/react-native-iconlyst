import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleSquareBold = ({
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
      d="M12.49 12c.407.982.904 1.515 1.475 1.781v-.249a.768.768 0 0 1 1.275-.577l1.482 1.306a.77.77 0 0 1 .001 1.152l-1.483 1.306a.77.77 0 0 1-.823.123.77.77 0 0 1-.452-.699v-.742c-.807-.221-1.62-.687-2.289-1.66-1.148 1.86-2.591 1.864-3.892 1.864a.769.769 0 0 1 0-1.536c1.419 0 2.229-.023 3.039-2.069-.81-2.046-1.62-2.069-3.039-2.069a.769.769 0 0 1 0-1.535c1.301 0 2.744.004 3.892 1.863.669-.972 1.482-1.438 2.289-1.659v-.743c0-.3.177-.575.451-.699a.77.77 0 0 1 .824.124l1.482 1.305a.764.764 0 0 1 .001 1.152l-1.483 1.305a.766.766 0 0 1-1.275-.576v-.248c-.571.265-1.068.799-1.475 1.78m3.727-9.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.124 5.526 5.284 5.526h8.433c3.16 0 5.283-2.221 5.283-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShuffleSquareBold;
