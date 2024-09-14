import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableMouseLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.274 19.159c2.354 2.353 6.055 2.466 8.268.253l3.44-3.442c2.211-2.212 2.097-5.913-.255-8.265-2.354-2.353-6.055-2.467-8.268-.253l-3.44 3.441c-2.211 2.213-2.097 5.913.255 8.266"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.478 3a1.045 1.045 0 0 0 .015 1.477l.576.576c.633.638.644 1.658.024 2.284l-.369.368M14.754 10.678l-1.287 1.287"
    />
  </Svg>
);
export default IconlystCableMouseLight;
