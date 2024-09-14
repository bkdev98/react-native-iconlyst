import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSettingTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12 4.12 9.256 3l-4.17 2.729v3.003L3 9.804v4.393l2.085 1.07v3L9.256 21 12 19.875M12 18.125v1.755L14.744 21l4.17-2.729v-3.003L21 14.196V9.803l-2.085-1.07v-3L14.744 3 12 4.125v1.75" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.955 11.957v.018M12 11.77a.23.23 0 1 1-.002.46.23.23 0 0 1 .002-.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.698 10.443-.003-.004a.83.83 0 0 1-.119-.426l.01-.49a.78.78 0 0 0-.319-.643 4 4 0 0 0-.7-.404.78.78 0 0 0-.715.046l-.42.252a.8.8 0 0 1-.43.11h-.005a.83.83 0 0 1-.428-.11l-.421-.252a.78.78 0 0 0-.715-.046q-.372.166-.7.404a.78.78 0 0 0-.318.643l.01.49a.83.83 0 0 1-.12.427l-.003.005a.83.83 0 0 1-.31.314l-.428.239a.79.79 0 0 0-.4.613 4 4 0 0 0 0 .776.79.79 0 0 0 .4.613l.428.237a.83.83 0 0 1 .31.317l.003.004c.075.131.121.276.119.427l-.009.49a.78.78 0 0 0 .319.643q.328.238.7.403c.23.103.499.084.715-.046l.42-.252a.8.8 0 0 1 .429-.11h.005c.151 0 .3.032.429.11l.42.252a.78.78 0 0 0 .716.046q.372-.166.7-.404a.78.78 0 0 0 .317-.643l-.009-.49a.8.8 0 0 1 .12-.426l.003-.005a.83.83 0 0 1 .31-.316l.428-.237a.79.79 0 0 0 .4-.614 4 4 0 0 0-.001-.776.79.79 0 0 0-.4-.612l-.427-.238a.83.83 0 0 1-.311-.317"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSettingTwoTone;
