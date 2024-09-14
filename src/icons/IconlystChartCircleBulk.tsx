import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartCircleBulk = ({
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
      d="M16.218 2.5H7.784C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.284 5.53h8.433c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.437 12.206c.524-.068.926-.52.936-1.051.017-.987-.548-2.176-1.475-3.102-.939-.937-2.087-1.412-3.258-1.42a1.076 1.076 0 0 0-1.019 1.05c-.008.764-.006 2.037-.003 2.89a1.65 1.65 0 0 0 1.637 1.648c.36.004.792.007 1.236.007.701 0 1.431-.007 1.946-.022m-4.436 5.17a5.37 5.37 0 0 0 4.69-2.748.75.75 0 0 0-1.31-.733 3.873 3.873 0 0 1-4.885 1.676 3.883 3.883 0 0 1-2.06-5.077 3.83 3.83 0 0 1 1.556-1.801.75.75 0 1 0-.776-1.283 5.33 5.33 0 0 0-2.162 2.5c-1.152 2.724.128 5.883 2.858 7.043.681.286 1.39.423 2.09.423m1.117-6.807c-.002-.694-.004-1.67 0-2.407.786.13 1.4.633 1.72.953.543.542.86 1.144.98 1.607-.772.009-1.815.009-2.554 0-.083 0-.146-.065-.146-.153"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartCircleBulk;
