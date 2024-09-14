import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappBold = ({
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
      fillRule="evenodd"
      d="m14.51 14.067-.103-.071a.53.53 0 0 0-.671.045l-.232.234a.75.75 0 0 1-.92.115c-1.152-.694-1.727-1.364-2.446-2.433a.75.75 0 0 1 .085-.941l.233-.24a.53.53 0 0 0 .056-.683 57 57 0 0 1-.462-.658.52.52 0 0 0-.789-.066l-.125.126-.003.003c-1.062 1.065.085 2.97 1.513 4.4 1.41 1.405 3.298 2.533 4.36 1.469l.147-.138a.5.5 0 0 0 .13-.396.51.51 0 0 0-.218-.38c-.184-.131-.365-.255-.555-.386"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.196 16.307-.148.14a2.84 2.84 0 0 1-2.062.862c-1.308 0-2.84-.796-4.4-2.35C7.112 12.483 6.53 9.985 8.07 8.44l.127-.128a2.023 2.023 0 0 1 3.084.265q.218.316.46.654a2.05 2.05 0 0 1-.021 2.37c.359.49.693.85 1.169 1.195a2.03 2.03 0 0 1 2.374-.033l.099.067c.199.138.389.268.57.4.482.334.793.872.847 1.468a2.02 2.02 0 0 1-.582 1.61m5.136-5.61c-.712-3.788-3.736-6.81-7.523-7.52a9.5 9.5 0 0 0-7.856 2.018 9.48 9.48 0 0 0-3.451 7.313c0 1.422.324 2.835.962 4.196a.56.56 0 0 1 .044.347c-.156.71-.483 2.136-.72 3.156a1.24 1.24 0 0 0 1.517 1.486c.95-.24 2.254-.559 3.072-.75a.5.5 0 0 1 .348.051 9.56 9.56 0 0 0 4.277 1.014 9.48 9.48 0 0 0 7.308-3.448 9.52 9.52 0 0 0 2.022-7.864"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhatsappBold;
