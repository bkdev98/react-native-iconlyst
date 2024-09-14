import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitForkBold = ({
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
      d="M20.832 16.95a2 2 0 0 0-1.061-1.061c-.375-.16-.766-.16-1.545-.16h-.316v-1.282c0-.927 0-1.437-.202-1.911a2.53 2.53 0 0 0-1.355-1.356c-.477-.201-.986-.201-1.911-.201H12.75v-2.71h.316c.78 0 1.17 0 1.545-.157.48-.204.857-.581 1.061-1.062.159-.373.159-.765.159-1.545V5.23c0-.78 0-1.172-.159-1.545a2 2 0 0 0-1.061-1.061c-.375-.16-.765-.16-1.545-.16h-2.132c-.78 0-1.17 0-1.543.16-.482.203-.859.58-1.063 1.06-.159.374-.159.766-.159 1.546v.275c0 .78 0 1.172.159 1.545.204.482.582.859 1.062 1.06.374.16.764.16 1.544.16h.316v2.709H9.558c-.925 0-1.434 0-1.914.202a2.53 2.53 0 0 0-1.35 1.352c-.204.477-.204.987-.204 1.914v1.283h-.316c-.779 0-1.171 0-1.546.159-.48.204-.856.58-1.06 1.062-.159.373-.159.765-.159 1.544v.275c0 .78 0 1.172.159 1.546.203.48.58.857 1.06 1.06.375.159.767.159 1.546.159h2.131c.781 0 1.171 0 1.544-.158a1.99 1.99 0 0 0 1.064-1.062c.157-.374.157-.765.157-1.545v-.275c0-.78 0-1.17-.157-1.543a1.99 1.99 0 0 0-1.063-1.063c-.374-.16-.764-.16-1.545-.16H7.59v-1.282c0-.704 0-1.13.085-1.33a1.04 1.04 0 0 1 .553-.554c.199-.084.625-.084 1.33-.084h4.884c.705 0 1.131 0 1.328.083.251.107.449.305.557.56.083.195.083.62.083 1.325v1.283h-.315c-.781 0-1.171 0-1.544.159a1.99 1.99 0 0 0-1.064 1.063c-.157.373-.157.764-.157 1.543v.275c0 .78 0 1.17.157 1.545.203.48.581.858 1.063 1.06.374.16.764.16 1.545.16h2.131c.779 0 1.17 0 1.545-.158.48-.204.857-.58 1.061-1.061.159-.374.159-.765.159-1.546v-.275c0-.78 0-1.171-.159-1.544"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitForkBold;