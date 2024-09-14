import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRemoveBold = ({
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
      d="M17.03 4.063h-6.57a.499.499 0 0 0-.35.85l3.963 4.05a.5.5 0 0 0 .357.15h6.77a.3.3 0 0 0 .3-.3v-.08c0-2.79-1.8-4.67-4.47-4.67M20.64 15.673c.1.1.23.15.36.15.06 0 .13-.01.19-.04.19-.07.31-.26.31-.46v-4.41a.3.3 0 0 0-.3-.3h-4.797a.3.3 0 0 0-.214.51zM10.14 15.943H7.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.97a.749.749 0 1 1 0 1.5m.17-6.59-.03-.03-5.86-6.21a.746.746 0 1 0-1.09 1.02l.82.87c-1.06.81-1.65 2.13-1.65 3.73v.08a.3.3 0 0 0 .3.3h5.23l1.41 1.5H2.8a.3.3 0 0 0-.3.3v4.41c0 2.79 1.79 4.66 4.46 4.66h10.07c.39 0 .77-.04 1.13-.13l.98 1.04a.75.75 0 0 0 1.06.04c.3-.29.32-.76.03-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardRemoveBold;
