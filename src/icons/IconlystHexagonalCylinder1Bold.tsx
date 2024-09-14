import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinder1Bold = ({
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
      d="M19.625 8.01q0-.04-.002-.083c-.009-.213-.253-.308-.427-.186L15.987 9.99l-.052.032a.3.3 0 0 0-.15.26v4.98c0 .106.058.201.15.257l.047.03 3.323 2.326c.128.09.32.014.32-.142zM8.065 15.52a.3.3 0 0 0 .15-.26v-4.98a.3.3 0 0 0-.15-.258l-.047-.03-3.213-2.25c-.175-.123-.42-.028-.428.185l-.002.083v9.721c0 .157.193.233.32.143l3.319-2.322zM9.716 14.755a.3.3 0 0 0 .3.3h3.968a.3.3 0 0 0 .3-.3v-3.97a.3.3 0 0 0-.3-.3h-3.968a.3.3 0 0 0-.3.3zM14.284 22.15v-5.296a.3.3 0 0 0-.3-.3h-3.968a.3.3 0 0 0-.3.3v5.296c0 .096.047.192.141.21a1 1 0 0 0 .116.011h4.053q.06 0 .117-.012c.094-.017.141-.113.141-.209M16.256 17.57a.3.3 0 0 0-.472.247v3.28a.3.3 0 0 0 .472.245l2.347-1.642.044-.033c.146-.114.12-.34-.032-.447zM8.216 17.818a.3.3 0 0 0-.472-.246l-2.356 1.649c-.153.107-.179.334-.032.448l.043.032 2.345 1.641a.3.3 0 0 0 .472-.245zM8.873 8.76c.21.145.471.226.73.226h4.793c.26 0 .522-.081.737-.23l3.45-2.416c.1-.07.118-.228.02-.298l-3.204-2.243a2.4 2.4 0 0 0-1.373-.428H9.974c-.492 0-.967.149-1.377.43l-3.2 2.242c-.097.07-.08.226.019.295z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalCylinder1Bold;
