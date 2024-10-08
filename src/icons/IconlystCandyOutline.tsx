import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyOutline = ({
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
      d="M12.048 7.222a5.353 5.353 0 1 0 0 10.706 5.353 5.353 0 0 0 0-10.706m-6.853 5.353a6.853 6.853 0 1 1 13.706 0 6.853 6.853 0 0 1-13.706 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.88 9.473a.75.75 0 0 1 .53.918l-1.274 4.756a.75.75 0 1 1-1.448-.388l1.274-4.756a.75.75 0 0 1 .919-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.152 11.744a.75.75 0 0 1-.53.919l-4.757 1.274a.75.75 0 1 1-.388-1.449l4.756-1.274a.75.75 0 0 1 .919.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.778 10.304a.75.75 0 0 1 1.06 0l3.482 3.481a.75.75 0 1 1-1.06 1.06l-3.482-3.48a.75.75 0 0 1 0-1.061M15.733 5.635a5.4 5.4 0 0 0 .117 1.526.75.75 0 0 1-1.46.343 6.9 6.9 0 0 1-.154-1.966c.04-.623.17-1.272.44-1.76.136-.246.34-.51.647-.675.335-.18.711-.196 1.068-.065.328.12.612.353.86.629q.176.195.351.444c.239-.12.482-.216.721-.28.457-.125 1.012-.164 1.498.095.54.288.792.83.82 1.432.02.416-.062.892-.234 1.426q.311.193.547.39c.285.24.528.52.656.852.138.362.12.739-.052 1.073-.158.306-.414.52-.656.666-.481.292-1.127.454-1.75.525a6.6 6.6 0 0 1-1.95-.063.75.75 0 0 1 .288-1.472 5 5 0 0 0 1.493.045c.52-.06.923-.185 1.142-.318l.018-.011a1.4 1.4 0 0 0-.154-.148c-.174-.146-.445-.325-.847-.528a.75.75 0 0 1-.354-.956c.292-.705.367-1.155.355-1.411a.5.5 0 0 0-.035-.181c-.028-.01-.144-.036-.392.03a3 3 0 0 0-.92.468.75.75 0 0 1-1.092-.241 4.7 4.7 0 0 0-.567-.834 2 2 0 0 0-.156-.153c-.114.214-.215.605-.248 1.118M8.509 19.686a5.4 5.4 0 0 0-.117-1.526.75.75 0 0 1 1.46-.343c.147.629.195 1.327.153 1.966-.04.623-.17 1.273-.439 1.76-.136.246-.34.51-.647.675-.336.18-.712.196-1.068.065-.328-.12-.613-.353-.861-.628a5 5 0 0 1-.35-.445q-.361.182-.722.281c-.457.124-1.012.164-1.498-.095-.54-.288-.792-.83-.82-1.432-.02-.416.062-.893.234-1.427a5 5 0 0 1-.546-.39c-.286-.24-.53-.52-.656-.852a1.3 1.3 0 0 1 .051-1.073c.158-.306.414-.519.656-.666.481-.291 1.128-.454 1.75-.525a6.6 6.6 0 0 1 1.951.063.75.75 0 1 1-.29 1.472 5 5 0 0 0-1.491-.045c-.52.06-.924.185-1.142.318l-.019.012q.05.06.154.147c.174.147.446.325.847.528a.75.75 0 0 1 .354.956c-.292.705-.366 1.156-.354 1.412a.5.5 0 0 0 .034.18c.028.01.144.037.392-.03a3 3 0 0 0 .92-.468.75.75 0 0 1 1.092.242c.221.393.412.66.568.833a2 2 0 0 0 .156.153c.113-.213.215-.605.248-1.118"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyOutline;
