import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickder2LineBulk = ({
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
      d="M16.53 3.696v-.7a.749.749 0 1 0-1.5 0v2.96c0 .29.17.54.41.66a.63.63 0 0 1-.33.09c-.42 0-.75-.33-.75-.75v-2.09a.2.2 0 0 0-.2-.2H9.25v-.67a.749.749 0 1 0-1.5 0v2.96c0 .29.18.54.42.66a.63.63 0 0 1-.33.09c-.42 0-.75-.33-.75-.75V4.001a.193.193 0 0 0-.238-.19A4.894 4.894 0 0 0 3.18 8.546v8.53c0 2.57 2.08 4.68 4.63 4.68h5.49c.27 0 .47-.22.47-.48v-3.34c0-1.9 1.55-3.46 3.43-3.47h3.16c.26 0 .46-.21.46-.46v-5.68c0-2.46-1.89-4.46-4.29-4.63"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.897 15.978c-.845-.003-1.84 0-2.556.007-1.136 0-2.072.946-2.072 2.093v2.735c0 .447.537.67.844.347l2.081-2.186c.76-.797 1.514-1.59 2.055-2.16a.494.494 0 0 0-.352-.836M14.54 11.205H7.9a.749.749 0 1 1 0-1.5h6.64a.749.749 0 1 1 0 1.5m-3.72 4.07H7.9a.749.749 0 1 1 0-1.5h2.92a.749.749 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStickder2LineBulk;
