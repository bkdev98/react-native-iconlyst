import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKucoinBold = ({
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
      d="m17.361 14.428-2.856 2.854-5.287-5.288 5.287-5.286 3.082 3.096c.666.654 1.797.64 2.428-.002.33-.33.51-.764.508-1.223a1.68 1.68 0 0 0-.508-1.201l-3.969-3.99a2.185 2.185 0 0 0-3.082 0l-5.69 5.684V5.405a1.907 1.907 0 0 0-1.9-1.911c-1.047 0-1.9.857-1.9 1.911v13.21c0 1.047.853 1.9 1.9 1.9a1.9 1.9 0 0 0 1.9-1.9v-3.696l5.69 5.702a2.17 2.17 0 0 0 1.541.635 2.18 2.18 0 0 0 1.541-.635l3.757-3.761c.318-.323.5-.766.5-1.215 0-.472-.183-.905-.51-1.217a1.733 1.733 0 0 0-2.432 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.932 12.005a1.523 1.523 0 0 0 3.044 0 1.523 1.523 0 0 0-3.045 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKucoinBold;
