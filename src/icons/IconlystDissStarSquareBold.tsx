import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDissStarSquareBold = ({
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
      d="m19.13 5.936-9.554 9.548a.8.8 0 0 1-.149.149l-3.495 3.492a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l3.428-3.425.208-1.189-1.561-1.416a1.393 1.393 0 0 1-.03-1.985 1.37 1.37 0 0 1 .814-.413l2.195-.309.917-1.895c.174-.34.466-.587.824-.702.362-.115.75-.082 1.09.094.244.119.464.333.603.595l.725 1.439 3.985-3.984a.751.751 0 0 1 1.061 1.061m-1.871 6.099-1.59 1.509.407 2.046a1.41 1.41 0 0 1-2.061 1.468l-1.946-1.001a.75.75 0 0 1 .686-1.334l1.842.947-.374-1.96c-.082-.46.072-.928.412-1.253l1.591-1.51a.751.751 0 0 1 1.033 1.088M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.197 10.058c-.21.41-.607.69-1.062.755l-2.038.287 1.474 1.356c.165.158.283.35.355.556l3.04-3.038-.878-1.744z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDissStarSquareBold;
