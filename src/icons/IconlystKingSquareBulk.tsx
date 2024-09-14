import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingSquareBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.72 2.5 8.026v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.486 14.41.775-4.42a.975.975 0 0 0-.469-1.02.98.98 0 0 0-1.12.086l-1.52 1.23-1.416-1.591c-.373-.422-1.1-.42-1.47-.001l-1.418 1.593-1.519-1.23a.98.98 0 0 0-1.12-.087.975.975 0 0 0-.47 1.019l.778 4.419c.123.71.738 1.226 1.461 1.226h6.046c.721 0 1.336-.515 1.462-1.224M12 10.125l1.358 1.527a.983.983 0 0 0 1.357.108l.831-.672-.438 2.496-.084.549-6.03.017-.539-3.061.828.67a.98.98 0 0 0 1.357-.106z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKingSquareBulk;
