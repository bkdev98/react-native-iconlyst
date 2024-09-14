import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapBold = ({
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
      d="M11.857 2.764a.75.75 0 0 1 .948-.475c.623.207 1.1.646 1.324 1.22.223.576.167 1.223-.153 1.796a.75.75 0 1 1-1.31-.731c.12-.213.114-.394.065-.52-.05-.128-.168-.265-.4-.342a.75.75 0 0 1-.474-.948"
    />
    <Path
      fill={props.color}
      d="M9.044 2.71a.75.75 0 0 0-1.276.789l3.514 5.69h-2.41l-.003-.003-4.066-4.504a.75.75 0 0 0-1.114 1.005L6.851 9.19H5.81c-.908 0-1.645.736-1.645 1.645v1.11a8.3 8.3 0 0 0 3.828 7v1.061c0 .826.67 1.495 1.496 1.495h5.97c.826 0 1.495-.67 1.495-1.495v-1.06a8.3 8.3 0 0 0 3.83-7v-1.111c0-.91-.737-1.645-1.645-1.645h-6.093z"
    />
    <Path
      fill={props.color}
      d="M17.26 5.822a.75.75 0 0 0-.404-1.444c-.632.176-1.13.591-1.382 1.154-.252.564-.228 1.212.063 1.8a.75.75 0 1 0 1.345-.664c-.109-.22-.094-.4-.039-.524.056-.124.18-.256.416-.322"
    />
  </Svg>
);
export default IconlystSoapBold;
