import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser1Outline = ({
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
      d="M4.132 3.463c.726-.78 1.756-1.208 2.954-1.208h9.828c1.2 0 2.23.429 2.956 1.209.721.774 1.087 1.833 1.087 3.002v9.492c0 1.169-.366 2.228-1.087 3.002-.726.78-1.757 1.209-2.957 1.209H7.086c-1.2 0-2.23-.43-2.957-1.21-.72-.773-1.086-1.832-1.086-3.001V6.466c0-1.17.368-2.229 1.089-3.003m1.097 1.023c-.42.45-.686 1.121-.686 1.98v9.492c0 .859.266 1.53.684 1.98.413.443 1.03.73 1.859.73h9.827c.83 0 1.447-.287 1.86-.73.418-.45.684-1.121.684-1.98V6.466c0-.86-.266-1.53-.684-1.98-.413-.444-1.03-.731-1.86-.731H7.087c-.827 0-1.443.287-1.857.731"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.088 18.553a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.697a.75.75 0 0 1 .75-.75m11.823 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.697a.75.75 0 0 1 .75-.75M9.459 9.328a.75.75 0 0 1 .75.75v2.268a.75.75 0 1 1-1.5 0v-2.268a.75.75 0 0 1 .75-.75m5.082 0a.75.75 0 0 1 .75.75v2.268a.75.75 0 1 1-1.5 0v-2.268a.75.75 0 0 1 .75-.75M11.998 2.25a.75.75 0 0 1 .75.75v16.421a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDresser1Outline;
