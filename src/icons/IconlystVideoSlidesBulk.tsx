import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlidesBulk = ({
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
      fillRule="evenodd"
      d="M15.78 3.5H9.84a3.604 3.604 0 0 0-3.602 3.6v9.8c0 1.985 1.615 3.6 3.601 3.6h5.94a3.604 3.604 0 0 0 3.601-3.6V7.1c0-1.985-1.615-3.6-3.6-3.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.834 6.71a.75.75 0 0 0-.75.75v9.07a.75.75 0 0 0 1.5 0V7.46a.75.75 0 0 0-.75-.75M21.834 6.71a.75.75 0 0 0-.75.75v9.07a.75.75 0 0 0 1.5 0V7.46a.75.75 0 0 0-.75-.75M15.316 13.424l-.002.003a8.3 8.3 0 0 1-2.456 1.54 2.1 2.1 0 0 1-.768.155c-.302 0-.591-.076-.849-.227-.45-.265-.749-.743-.82-1.312a14.7 14.7 0 0 1-.001-3.156c.078-.587.375-1.05.838-1.317.473-.272 1.058-.298 1.607-.073a8.3 8.3 0 0 1 2.448 1.538c.427.384.665.887.668 1.414.002.531-.234 1.039-.665 1.435m-3.203-3.04a.5.5 0 0 1 .182.04 6.8 6.8 0 0 1 2.013 1.265c.064.057.172.174.173.308 0 .1-.062.214-.177.32a6.8 6.8 0 0 1-2.006 1.257c-.15.06-.252.053-.296.028-.045-.027-.08-.103-.091-.19a13 13 0 0 1-.002-2.802c.009-.072.034-.164.099-.201a.2.2 0 0 1 .105-.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlidesBulk;
