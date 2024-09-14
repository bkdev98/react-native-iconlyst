import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickder2LineBold = ({
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
      d="M14.54 11.206H7.9a.749.749 0 1 1 0-1.5h6.64a.749.749 0 1 1 0 1.5m-3.72 4.07H7.9a.749.749 0 1 1 0-1.5h2.92a.749.749 0 1 1 0 1.5m5.7-11.58v-.7c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c0 .29.17.54.42.66-.11.06-.22.09-.34.09-.41 0-.75-.33-.75-.75v-2.09a.2.2 0 0 0-.2-.2h-4.9v-.67c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c0 .29.17.54.42.66-.11.06-.22.09-.34.09-.41 0-.75-.33-.75-.75V4.001a.193.193 0 0 0-.238-.19A4.886 4.886 0 0 0 3.18 8.546v8.53c0 2.57 2.07 4.68 4.63 4.68h5.49c.26 0 .47-.22.47-.48v-3.34c0-1.9 1.55-3.46 3.43-3.47h3.15c.26 0 .47-.21.47-.46v-5.68c0-2.46-1.9-4.46-4.3-4.63"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.892 15.977c-.845-.003-1.84 0-2.556.007-1.136 0-2.072.946-2.072 2.093v2.735c0 .447.537.67.844.347l2.08-2.186c.76-.797 1.515-1.59 2.056-2.16a.494.494 0 0 0-.352-.836"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStickder2LineBold;
