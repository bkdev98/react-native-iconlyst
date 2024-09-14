import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappBulk = ({
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
      d="M21.332 10.188c-.712-3.788-3.736-6.81-7.523-7.52a9.5 9.5 0 0 0-7.856 2.018A9.48 9.48 0 0 0 2.502 12c0 1.422.324 2.835.962 4.196a.56.56 0 0 1 .044.348c-.156.709-.483 2.136-.72 3.156a1.24 1.24 0 0 0 1.517 1.485c.95-.24 2.254-.559 3.072-.75a.5.5 0 0 1 .348.051 9.56 9.56 0 0 0 4.277 1.015 9.48 9.48 0 0 0 7.308-3.448 9.52 9.52 0 0 0 2.022-7.864"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.196 15.798-.148.14a2.84 2.84 0 0 1-2.062.861c-1.308 0-2.84-.796-4.4-2.35C7.112 11.974 6.53 9.476 8.07 7.93l.127-.128a2.023 2.023 0 0 1 3.084.265q.218.316.46.654a2.05 2.05 0 0 1-.021 2.37c.359.49.693.85 1.169 1.196a2.03 2.03 0 0 1 2.374-.034l.099.067c.199.139.389.268.57.4a2.018 2.018 0 0 1 .264 3.077m-1.789-2.312.103.071c.19.131.371.255.555.387a.51.51 0 0 1 .218.379.5.5 0 0 1-.13.396l-.147.138c-1.062 1.064-2.95-.064-4.36-1.469-1.428-1.429-2.575-3.335-1.513-4.4l.003-.003.125-.126a.5.5 0 0 1 .407-.149.52.52 0 0 1 .382.215c.148.213.303.436.462.658a.53.53 0 0 1-.056.683l-.233.24a.75.75 0 0 0-.085.941c.719 1.069 1.294 1.739 2.446 2.433a.75.75 0 0 0 .92-.115l.232-.234a.53.53 0 0 1 .671-.045"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhatsappBulk;
