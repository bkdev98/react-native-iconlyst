import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExplore1Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 12.25q0 .375-.03.75c-.36 4.64-4.08 8.36-8.72 8.72a9.4 9.4 0 0 1-1.5 0c-4.64-.36-8.36-4.08-8.72-8.72a9.4 9.4 0 0 1 0-1.5c.36-4.64 4.08-8.36 8.72-8.72a9.4 9.4 0 0 1 1.5 0c4.64.36 8.36 4.08 8.72 8.72q.03.375.03.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 19.538v2.18a9.4 9.4 0 0 1-1.5 0v-2.18a.749.749 0 1 1 1.5 0M5.46 12.248c0 .42-.34.75-.75.75H2.53a9.4 9.4 0 0 1 0-1.5h2.18c.41 0 .75.34.75.75M12.75 2.778v2.17a.749.749 0 1 1-1.5 0v-2.17a9.4 9.4 0 0 1 1.5 0M21.5 12.248q0 .375-.03.75h-2.18a.749.749 0 1 1 0-1.5h2.18q.03.375.03.75M14.979 8.642l-4.765 1.49a.5.5 0 0 0-.328.328l-1.491 4.77a.5.5 0 0 0 .626.626l4.765-1.49a.5.5 0 0 0 .327-.328l1.492-4.77a.5.5 0 0 0-.123-.502.49.49 0 0 0-.503-.124"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExplore1Bulk;
