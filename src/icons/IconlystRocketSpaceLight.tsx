import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRocketSpaceLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.328 6.878c2.547-.912 4.518-1.013 5.109-.086.28.439.22 1.06-.123 1.798M5.944 13.48c-1.927 1.938-2.866 3.696-2.272 4.63.663 1.039 3.061.785 6.063-.456"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.79 8.426a6.604 6.604 0 1 0-8.944 9.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m2.624 9.09-.01-.007M17.015 3.12l-.01-.007"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.46 13.462q.009.004.013.012M15.507 19.482l1.925 1.925c.237.236.62.236.857 0l.53-.53c.36-.36.52-.87.431-1.37l-.051-.29a7.8 7.8 0 0 1-.085-2.094l.12-1.272M12.465 16.439l-1.925-1.925a.606.606 0 0 1 0-.857l.53-.53c.36-.36.87-.52 1.37-.431l.289.051a7.8 7.8 0 0 0 2.095.085l1.272-.121M15.444 16.545l-.604.604"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.38 17.591v-.59c0-.305.12-.597.336-.812l4.196-4.197c.8-.8 1.886-1.25 3.018-1.25a1.317 1.317 0 0 1 1.317 1.316c0 1.132-.45 2.218-1.25 3.018L15.8 19.273a1.15 1.15 0 0 1-.812.336h-.59c-.305 0-.597-.121-.812-.336l-.87-.87a1.15 1.15 0 0 1-.336-.812"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRocketSpaceLight;
