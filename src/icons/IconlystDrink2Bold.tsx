import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink2Bold = ({
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
      d="M5.624 2.773C5.927 2.566 6.3 2.5 6.64 2.5h1.087c.341 0 .713.066 1.016.273.329.226.52.583.52 1.027v1.583a.6.6 0 0 0-.103-.01H5.103V3.8c0-.444.192-.801.521-1.027M5.103 6.474v.498c0 .92-.288 1.54-.893 2.333l-.317.414a5.36 5.36 0 0 0-1.1 3.254v6.42c0 1.164.945 2.107 2.107 2.107h4.567a2.106 2.106 0 0 0 2.106-2.107v-1.4a.6.6 0 0 1-.103.01H7.332a.55.55 0 0 1 0-1.1h4.138a.6.6 0 0 1 .103.01V14.55a.6.6 0 0 1-.104.01H7.331a.55.55 0 0 1 0-1.1h4.138a.6.6 0 0 1 .104.01v-.496a5.37 5.37 0 0 0-1.098-3.254l-.317-.414c-.606-.794-.894-1.413-.894-2.333v-.508a.6.6 0 0 1-.104.01zM13.907 20.374l-.62-7.549A1.225 1.225 0 0 1 14.51 11.5h4.971c.716 0 1.281.611 1.222 1.325l-.619 7.549a1.226 1.226 0 0 1-1.221 1.126h-3.733c-.639 0-1.17-.49-1.222-1.126"
    />
  </Svg>
);
export default IconlystDrink2Bold;
