import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChilizBold = ({
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
      d="m13.947 11.216.608-1.233-1.216.822zM9.973 8.53 12 9.9l2.028-1.37zM9.45 9.985l.605 1.23.607-.41zM12 11.71l-1.275.864 1.277 2.59 1.276-2.59z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.165 8.037c-.009.024-.004.051-.015.074l-4.476 9.08a.75.75 0 0 1-1.346 0l-4.475-9.08c-.01-.02-.005-.043-.013-.064a.7.7 0 0 1-.051-.244c-.001-.035-.003-.066.001-.101a.7.7 0 0 1 .082-.265c.009-.017.007-.037.017-.053q.005-.005.009-.009.003-.008.007-.015a.7.7 0 0 1 .241-.221c.023-.014.049-.019.074-.03a.7.7 0 0 1 .254-.066c.018-.001.033-.013.052-.013h8.951c.018 0 .033.012.051.013q.13.01.251.065c.026.012.053.017.078.032a.7.7 0 0 1 .239.219q.003.006.005.013.006.006.013.012c.013.021.01.047.021.069a.7.7 0 0 1 .076.243c.005.04.002.077 0 .117a.7.7 0 0 1-.046.224M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChilizBold;
