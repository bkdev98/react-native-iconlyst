import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAftabeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.682 7.626A.749.749 0 1 0 19.57 6.62l-4.152 4.588c-.06-.1-.139-.189-.219-.279l-.975-1.073a.31.31 0 0 0-.304-.09c-.206.05-.432.092-.67.123-.28.05-.59.08-.92.11-.6.06-1.29.09-2.05.09-.75 0-1.42-.03-2.01-.08-.34-.03-.65-.07-.94-.11-.253-.04-.48-.085-.692-.132a.3.3 0 0 0-.287.089l-.982 1.053-.006.006-1.08 1.16.286.538v.003c-.01.098-.02.195-.02.293-.01.19 0 .39.03.59l1.15 6.68c.36 1.44 2.06 2.3 4.54 2.3 2.49 0 4.19-.86 4.56-2.36l1.13-6.62c.03-.17.04-.34.04-.51v-.06c0-.04 0-.08-.01-.11v-.008z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m5.363 10.915-.449-.844c-.306-.62-.373-1.28-.19-1.86.397-1.25 1.587-1.221 2.095-1.15l.108 1.017a.29.29 0 0 0 .23.254q.25.046.562.087c.23.03.49.06.77.08.52.05 1.12.08 1.79.09q1.035-.015 1.83-.09a13 13 0 0 0 .842-.094q.259-.042.468-.081a.29.29 0 0 0 .23-.26l.28-2.965v-.18c0-1.26-1.97-1.7-3.66-1.7s-3.66.44-3.66 1.7v.04c0 .05 0 .1.01.15l.05.437c-1.176-.063-2.78.337-3.376 2.212-.3.952-.202 2.01.286 2.998l.704 1.32zm4.906-5.806c.42 0 .79-.03 1.1-.08.23-.03.43-.07.59-.11-.39-.11-.96-.2-1.69-.2-.72 0-1.3.09-1.69.2.16.04.36.08.59.11.31.05.68.08 1.1.08M11.49 19.11c-.28.48-.75.76-1.3.76s-1.02-.28-1.3-.76c-.29-.52-.3-1.16-.01-1.64.4-.63 1-1.05 1.02-1.06.17-.12.4-.13.57 0 .03.01.62.43 1.02 1.04.3.5.29 1.14 0 1.66"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.214 12.408c-1.052.182-2.426.282-3.855.282-1.527 0-2.962-.118-4.02-.312a.184.184 0 0 0-.21.112c-.09.241-.112.5-.07.76l.086.492c.015.083.08.148.163.162 1.119.185 2.534.286 4.051.286 1.428 0 2.765-.092 3.868-.258a.2.2 0 0 0 .166-.164l.086-.518a1.5 1.5 0 0 0-.053-.723.185.185 0 0 0-.212-.119"
    />
  </Svg>
);
export default IconlystAftabeBulk;
