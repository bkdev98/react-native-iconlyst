import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClouds1Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.54 8.71c.632-.837 1.649-1.505 3.099-1.505s2.466.668 3.099 1.504a4.44 4.44 0 0 1 .797 1.778c.658.12 1.266.41 1.748.87.65.62 1.021 1.499 1.021 2.538a3.47 3.47 0 0 1-2.07 3.18c-.497.2-.99.274-1.379.274h-5.558a.75.75 0 0 1 0-1.5h5.558c.208 0 .504-.042.806-.16a1.97 1.97 0 0 0 1.143-1.794c0-.667-.23-1.141-.556-1.453-.333-.317-.816-.513-1.397-.518a.75.75 0 0 1-.743-.75c0-.379-.16-1.024-.566-1.56-.383-.505-.976-.91-1.904-.91s-1.52.405-1.902.91c-.406.536-.566 1.18-.566 1.56a.75.75 0 0 1-.743.75c-1.04.01-1.806.615-1.935 1.647a.75.75 0 0 1-1.488-.185c.201-1.62 1.34-2.642 2.739-2.899.114-.572.37-1.214.797-1.778"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.349 5.372c.778-1.028 2.025-1.85 3.814-1.85 1.58 0 2.745.642 3.535 1.512a5.44 5.44 0 0 1 1.304 2.744.75.75 0 1 1-1.482.233 3.94 3.94 0 0 0-.933-1.969c-.524-.578-1.294-1.02-2.424-1.02-1.267 0-2.09.558-2.618 1.255-.55.728-.772 1.603-.772 2.136a.75.75 0 0 1-.743.75c-.794.007-1.47.275-1.943.726-.465.444-.782 1.113-.782 2.024a2.75 2.75 0 0 0 1.605 2.5c.413.166.82.227 1.11.227a.75.75 0 0 1 0 1.5 4.6 4.6 0 0 1-1.714-.353 4.25 4.25 0 0 1-2.501-3.874c0-1.284.458-2.357 1.247-3.11.622-.593 1.419-.958 2.284-1.087a5.5 5.5 0 0 1 1.013-2.344"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.883 13.891c.493-.65 1.287-1.171 2.408-1.171 1.122 0 1.916.52 2.409 1.171.295.39.485.829.585 1.236.46.107.888.325 1.236.656.514.491.803 1.184.803 1.987a2.72 2.72 0 0 1-1.629 2.495 3 3 0 0 1-1.075.213H6.96a2.9 2.9 0 0 1-1.1-.228 2.72 2.72 0 0 1-1.601-2.48c0-.803.289-1.496.803-1.987.348-.331.775-.55 1.236-.656.1-.407.29-.846.585-1.236m1.196.905c-.265.35-.368.773-.368 1.004a.75.75 0 0 1-.743.75c-.375.004-.672.13-.87.319-.192.182-.34.47-.34.901 0 .489.288.912.706 1.107.19.075.374.1.496.1h4.66c.125 0 .311-.024.502-.099.415-.194.702-.617.702-1.108 0-.431-.147-.719-.339-.902-.198-.188-.495-.314-.87-.318a.75.75 0 0 1-.743-.75c0-.23-.102-.653-.368-1.004-.242-.32-.613-.576-1.213-.576s-.97.256-1.212.576"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClouds1Outline;