import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasRingtoneBulk = ({
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
      d="M12.025 22.524a3.08 3.08 0 0 1-2.412-1.175.75.75 0 0 1 .585-1.219h3.66a.75.75 0 0 1 .586 1.219 3.09 3.09 0 0 1-2.42 1.175"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M18.19 13.54c-.344-.596-.67-1.16-.67-2.493 0-.945-.334-1.898-.897-2.724-.098.013-.193.032-.297.032-.868 0-1.953-.48-3.257-1.401a1.6 1.6 0 0 1-1.011.368c-.39 0-.741-.144-1.02-.375-1.386.927-2.534 1.408-3.446 1.408-.078 0-.147-.018-.222-.025-.56.825-.891 1.775-.891 2.718 0 1.333-.326 1.897-.67 2.495-.343.596-.698 1.21-.696 2.465.23 2.76 2.699 3.3 6.887 3.3s6.656-.54 6.888-3.342c0-1.213-.355-1.83-.698-2.425"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.583 6.804c-.356.173-1.31-.064-2.92-1.258v-.68c1.61-1.192 2.564-1.431 2.92-1.256.286.143.457.74.457 1.596s-.17 1.454-.457 1.598m-9.32-.017c-.305-.158-.48-.734-.48-1.581 0-.845.175-1.422.48-1.58.191-.1.983-.29 3.188 1.244v.672C8.244 7.077 7.45 6.888 7.262 6.787m9.991-4.518c-.992-.497-2.37-.101-4.19 1.186a1.6 1.6 0 0 0-1.008-.364c-.386 0-.737.143-1.014.372-1.967-1.316-3.436-1.706-4.47-1.168-.856.444-1.289 1.423-1.289 2.91 0 1.49.433 2.47 1.288 2.913a2.2 2.2 0 0 0 1.02.237c.911 0 2.06-.481 3.446-1.408.278.23.631.376 1.02.376a1.6 1.6 0 0 0 1.011-.37c1.304.922 2.39 1.402 3.257 1.402q.512 0 .93-.21c.852-.427 1.285-1.416 1.285-2.94 0-1.52-.433-2.508-1.286-2.936"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasRingtoneBulk;
