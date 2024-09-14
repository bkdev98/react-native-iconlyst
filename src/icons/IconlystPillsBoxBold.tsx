import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxBold = ({
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
      d="M8.61 6.134h6.778a.5.5 0 0 0 .5-.5V3.749c0-.863-.703-1.565-1.568-1.565H9.678c-.864 0-1.567.702-1.567 1.565v1.885a.5.5 0 0 0 .5.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.51 8.817-1.6-1.55a.52.52 0 0 0-.35-.14H8.44a.5.5 0 0 0-.35.14l-1.6 1.55c-.6.58-.92 1.36-.92 2.18v7.78c0 1.68 1.36 3.04 3.03 3.04h6.8c1.67 0 3.03-1.36 3.03-3.04v-7.78c0-.82-.33-1.6-.92-2.18m-8.96 7.48c0 .46.37.83.83.83h5.23c.46 0 .84-.37.84-.83v-2.11c0-.46-.38-.83-.83-.83H9.38c-.46 0-.83.37-.83.83z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPillsBoxBold;
