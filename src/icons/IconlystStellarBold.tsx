import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStellarBold = ({
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
      d="m17.098 11.372-.244.134c.017.163.048.329.048.488 0 2.702-2.198 4.9-4.9 4.9a.75.75 0 1 1 0-1.5c1.763 0 3.2-1.353 3.367-3.073l-7.05 3.87a.75.75 0 0 1-.722-1.314l8.779-4.82a.75.75 0 1 1 .722 1.314M6.605 13.666a.75.75 0 0 1 .296-1.02l.26-.142c-.018-.167-.05-.334-.05-.5A4.896 4.896 0 0 1 12 7.115a.75.75 0 0 1 0 1.5c-1.761 0-3.196 1.356-3.358 3.075l7.036-3.872a.755.755 0 0 1 1.019.296.75.75 0 0 1-.296 1.019l-8.778 4.83a.751.751 0 0 1-1.019-.296m9.612-11.161H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStellarBold;
