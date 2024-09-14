import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandBulk = ({
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
      d="M16.213 2.806H7.778c-3.157 0-5.278 2.219-5.278 5.52v7.948q.001.155.014.305c.015.174.234.242.35.112l5.746-6.51a2.94 2.94 0 0 1 4.148-.254l1.181 1.037c.59.515.942 1.23.993 2.015a2.9 2.9 0 0 1-.728 2.123l-5.597 6.362a.2.2 0 0 0 .15.332h7.456c3.162 0 5.287-2.22 5.287-5.522V8.327c0-3.302-2.125-5.521-5.287-5.521"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.935 10.389c0 .414.336.73.75.73s.75-.355.75-.77a.75.75 0 0 0-1.5 0zM15.345 17.956a.75.75 0 0 0 .75-.75v-.04a.733.733 0 0 0-.75-.73.767.767 0 0 0-.75.77c0 .414.336.75.75.75M16.227 6.669a.75.75 0 0 0-.75.75v.039c0 .414.336.731.75.731s.75-.356.75-.77a.75.75 0 0 0-.75-.75M6.077 7.65c0 .415.336.732.75.732s.75-.355.75-.769a.75.75 0 0 0-1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.93 16.554a.3.3 0 0 0-.028-.422l-2.895-2.549a.3.3 0 0 0-.423.027l-4.45 5.04a.29.29 0 0 0-.047.317c.632 1.332 1.754 2.268 3.221 2.64a.29.29 0 0 0 .289-.092c.553-.635 2.97-3.41 4.333-4.96M13.435 13.074a1.41 1.41 0 0 0-.484-.982l-1.184-1.04a1.423 1.423 0 0 0-2.032.121l-.762.862A.3.3 0 0 0 9 12.46l2.892 2.546a.3.3 0 0 0 .423-.027l.765-.868c.252-.288.379-.655.354-1.036"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRetouchMagicWandBulk;
