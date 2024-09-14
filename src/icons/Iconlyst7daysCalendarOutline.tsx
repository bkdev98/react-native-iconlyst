import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7daysCalendarOutline = ({
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
      d="M16.018 2.334a.75.75 0 0 1 .75.75v1.94a.75.75 0 0 1-1.5 0v-1.94a.75.75 0 0 1 .75-.75M8.489 2.334a.75.75 0 0 1 .75.75v1.94a.75.75 0 0 1-1.5 0v-1.94a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.945 4.276h8.626c1.405 0 2.64.39 3.527 1.236.893.85 1.335 2.068 1.33 3.52v7.87c0 1.452-.444 2.67-1.336 3.523-.887.847-2.122 1.24-3.529 1.24l-8.618.002c-1.407 0-2.643-.403-3.53-1.263-.891-.864-1.336-2.097-1.336-3.566V9.031c0-1.452.447-2.669 1.34-3.519.89-.844 2.124-1.236 3.526-1.236m8.626 1.5H7.945c-1.132 0-1.956.314-2.492.824-.53.504-.874 1.29-.874 2.43v7.808c0 1.166.346 1.972.88 2.489.537.52 1.358.84 2.486.84l8.618-.001c1.135 0 1.958-.316 2.493-.826.53-.506.873-1.294.873-2.437V9.028c.003-1.142-.338-1.927-.866-2.43-.534-.509-1.356-.823-2.492-.823"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.194 10.384a.75.75 0 0 1 .75-.75h3.377a.75.75 0 0 1 .704 1.008l-1.968 5.355a.75.75 0 0 1-1.408-.517l1.597-4.346H7.944a.75.75 0 0 1-.75-.75M16.133 9.334a.75.75 0 0 1 .75.75v5.69a.75.75 0 0 1-1.5 0v-5.69a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.31 13.53a.79.79 0 1 0-.001 1.578.79.79 0 0 0 0-1.579m-2.29.789a2.29 2.29 0 1 1 4.579 0 2.29 2.29 0 0 1-4.58 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst7daysCalendarOutline;
