import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsBold = ({
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
      fillRule="evenodd"
      d="M6.997 16.357a3.41 3.41 0 0 0 2.431 1.008c.92 0 1.783-.358 2.432-1.008l5.9-5.897a3.446 3.446 0 0 0 0-4.865L15.542 3.38c-1.3-1.3-3.567-1.298-4.864 0L4.78 9.278a3.445 3.445 0 0 0 0 4.864zm8.69-9.154h-5.24a.75.75 0 0 1 0-1.5h5.24a.75.75 0 0 1 0 1.5M7.62 10.688h7.24a.75.75 0 0 0 0-1.5H7.62a.75.75 0 0 0 0 1.5m4.465 3.485H6.846a.75.75 0 0 1 0-1.5h5.24a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.437 18.976c-.045.045-.119.051-.164.006l-2.246-2.246a.3.3 0 0 1 0-.424l3.685-3.685a.3.3 0 0 1 .424 0l2.277 2.277a.07.07 0 0 1-.002.098zM17.497 20.036c-.045.045-.051.12-.006.164l.3.3c.455.456 1.06.706 1.704.706s1.248-.251 1.702-.706l.702-.702c.94-.94.94-2.468 0-3.408l-.33-.33c-.026-.027-.07-.025-.097.002zM8.479 21.595H4.107a.75.75 0 0 1 0-1.5h4.372a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystToolsBold;
