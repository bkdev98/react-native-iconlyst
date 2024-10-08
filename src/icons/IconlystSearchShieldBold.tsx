import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchShieldBold = ({
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
      d="m20.993 20.118-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m10.986 13.957.147.062.147-.062c.238-.105.55-.265.856-.486.623-.448 1.13-1.07 1.13-1.933 0-.608.006-1.059.012-1.396l.005-.236c.003-.183.006-.315.006-.416l-.17-.076c-.22-.094-.506-.203-.802-.307-.296-.105-.592-.2-.832-.269a5 5 0 0 0-.352-.087l-.056.011a5 5 0 0 0-.295.077c-.24.068-.536.164-.832.268s-.582.214-.801.308l-.17.076c-.001.101.002.232.005.415l.005.235c.006.338.013.79.013 1.397 0 .862.506 1.485 1.129 1.933.306.221.618.381.855.486"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.713 11.24a8.42 8.42 0 1 1 16.841 0 8.42 8.42 0 0 1-16.84 0m8.42-3.993c-.135 0-.28.029-.378.05a7 7 0 0 0-.385.1c-.276.078-.602.184-.918.295-.316.112-.635.233-.894.344a5 5 0 0 0-.357.167c-.078.04-.233.123-.353.243l-.009.009c-.059.058-.202.2-.284.426a1.7 1.7 0 0 0-.077.554q0 .194.007.521l.004.213c.006.332.013.773.013 1.369 0 1.544.934 2.56 1.752 3.15a6.3 6.3 0 0 0 1.611.83l.034.011.01.004h.004l.002.001a.75.75 0 0 0 .435 0h-.435.438l.004-.002.01-.003.034-.01.111-.04a6.322 6.322 0 0 0 1.5-.791c.819-.59 1.753-1.606 1.753-3.15 0-.596.007-1.037.013-1.369l.004-.212q.007-.329.007-.521a1.7 1.7 0 0 0-.077-.553c-.081-.225-.222-.367-.28-.425l-.01-.01h-.001a1.5 1.5 0 0 0-.354-.246 5 5 0 0 0-.358-.167c-.26-.111-.578-.232-.894-.343a17 17 0 0 0-.919-.296 7 7 0 0 0-.385-.1 2 2 0 0 0-.378-.049"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchShieldBold;
