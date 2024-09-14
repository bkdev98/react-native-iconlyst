import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M19.99 18.953c.557 0 1.01.46 1.01 1.024S20.547 21 19.99 21h-5.71c-.557 0-1.01-.458-1.01-1.023s.453-1.024 1.01-1.024ZM16.03 3.7l1.475 1.172c.605.473 1.008 1.096 1.146 1.752.16.721-.01 1.43-.488 2.042L9.376 20.028a2.1 2.1 0 0 1-1.634.817l-3.502.043a.4.4 0 0 1-.392-.312l-.796-3.45c-.138-.635 0-1.29.403-1.796l6.23-8.062a.313.313 0 0 1 .424-.054l2.62 2.086c.17.14.404.215.648.182a.945.945 0 0 0 .817-1.042 1.05 1.05 0 0 0-.329-.635l-2.547-2.042a.38.38 0 0 1-.063-.526l.987-1.28c.912-1.172 2.504-1.28 3.788-.258"
    />
  </Svg>
);
export default IconlystEditBold;
