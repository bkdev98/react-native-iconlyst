import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunsetBold = ({
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
      d="M20.174 15.703H3.848a.75.75 0 0 0 0 1.5h16.326a.75.75 0 0 0 0-1.5M16.44 19.583H7.584a.75.75 0 0 0 0 1.5h8.854a.75.75 0 0 0 0-1.5M7.332 12.803h9.366a.5.5 0 0 0 .5-.5 5.19 5.19 0 0 0-5.182-5.19 5.19 5.19 0 0 0-5.184 5.19.5.5 0 0 0 .5.5M12.019 4.633a.85.85 0 0 0 .85-.85v-.03a.84.84 0 0 0-.85-.835.864.864 0 0 0-.85.865c0 .469.38.85.85.85M6 7.133a.851.851 0 0 0 .624-1.428l-.019-.02a.837.837 0 0 0-1.192-.035.863.863 0 0 0-.037 1.21c.168.18.396.273.624.273M3.496 13.153c.47 0 .827-.381.827-.85 0-.47-.405-.85-.874-.85a.85.85 0 0 0 0 1.7zM20.53 11.453a.85.85 0 0 0 0 1.7h.042a.833.833 0 0 0 .829-.85c0-.47-.401-.85-.87-.85M18.048 7.102a.9.9 0 0 0 .606-.234.85.85 0 1 0-1.152-1.25l-.044.04c-.345.318-.345.835-.027 1.181a.83.83 0 0 0 .617.263"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunsetBold;
