import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiningTableOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M2.912 4.793c.411-.05.784.24.833.65l.838 7.06h2.596c.995 0 1.802.81 1.802 1.8v3.67c0 .41-.335.75-.75.75a.753.753 0 0 1-.75-.75v-3.67c0-.16-.135-.3-.302-.3H4.548l-.812 4.11a.747.747 0 0 1-.88.59.747.747 0 0 1-.592-.88l.9-4.555-.909-7.645a.75.75 0 0 1 .657-.83M21.088 4.793c.412.05.706.42.657.83l-.91 7.644.901 4.556c.08.41-.184.8-.59.88a.747.747 0 0 1-.882-.59l-.811-4.11H16.82a.304.304 0 0 0-.302.3v3.67c0 .41-.336.75-.75.75a.753.753 0 0 1-.75-.75v-3.67c0-.99.807-1.8 1.802-1.8h2.597l.837-7.06c.05-.41.422-.7.833-.65"
    />
    <Path
      fill={props.color}
      d="M5.836 8.953c0-.42.336-.75.75-.75H17.45c.414 0 .75.33.75.75 0 .41-.336.75-.75.75h-4.68v8.27c0 .41-.337.75-.75.75a.753.753 0 0 1-.75-.75v-8.27H6.586a.753.753 0 0 1-.75-.75"
    />
  </Svg>
);
export default IconlystDiningTableOutline;
