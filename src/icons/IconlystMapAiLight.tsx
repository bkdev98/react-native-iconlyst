import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.71 19.8c-.947.76-1.741 1.2-2.095 1.2-1.205 0-7.526-5.118-7.526-10.473a7.527 7.527 0 0 1 14.995-.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.587 13.963-.122-.33a4.54 4.54 0 0 0-2.681-2.685l-.33-.122.33-.122a4.54 4.54 0 0 0 2.68-2.685l.122-.33.122.33a4.54 4.54 0 0 0 2.681 2.685l.33.122-.33.122a4.54 4.54 0 0 0-2.68 2.685zM17.347 17.515a2.67 2.67 0 0 0-1.773-1.776 2.67 2.67 0 0 0 1.773-1.776c.258.85.923 1.517 1.773 1.776a2.67 2.67 0 0 0-1.773 1.776"
    />
  </Svg>
);
export default IconlystMapAiLight;
