import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRainyOutline = ({
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
      d="M17.717 2.897c.4.11.634.523.525.922l-.006.02a.75.75 0 1 1-1.446-.396l.005-.02a.75.75 0 0 1 .922-.526m-5.003.637a.75.75 0 0 1 1.022.28l.01.015a.75.75 0 1 1-1.304.743l-.009-.015a.75.75 0 0 1 .28-1.023m9.004 2.449a.75.75 0 0 1-.28 1.023l-.037.02a.75.75 0 0 1-.742-1.303l.036-.02a.75.75 0 0 1 1.023.28m-.854 4.621a.75.75 0 0 1 .922-.525l.027.007a.75.75 0 1 1-.397 1.447l-.026-.007a.75.75 0 0 1-.526-.922M15.97 6.542c-.983 0-1.844.521-2.322 1.306a.75.75 0 1 1-1.281-.78 4.214 4.214 0 1 1 5.953 5.686.75.75 0 0 1-.838-1.244 2.714 2.714 0 0 0-1.512-4.968"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.63 8.28c.772-1.008 2.002-1.808 3.76-1.808 1.772 0 3.008.814 3.778 1.833a5.44 5.44 0 0 1 1.003 2.315c.855.13 1.642.49 2.257 1.077.782.746 1.236 1.81 1.236 3.081a.75.75 0 1 1-1.5 0c0-.899-.313-1.558-.771-1.995-.466-.444-1.132-.71-1.916-.716a.75.75 0 0 1-.743-.75c0-.525-.218-1.389-.761-2.107-.521-.688-1.333-1.238-2.584-1.238-1.232 0-2.038.534-2.559 1.207l-.31.447a.75.75 0 1 1-1.233-.855l.321-.463z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.677 9.688c.521-.689 1.36-1.239 2.547-1.239s2.027.55 2.548 1.238c.497.658.711 1.445.711 2.021a.75.75 0 0 1-1.5 0c0-.26-.114-.727-.407-1.115-.27-.357-.686-.644-1.352-.644-.665 0-1.08.287-1.35.644-.294.387-.408.854-.408 1.115a.75.75 0 0 1-.743.75c-.416.004-.75.144-.976.358-.219.21-.383.534-.383 1.013 0 .555.33 1.034.807 1.25a.75.75 0 0 1-.618 1.367 2.87 2.87 0 0 1-1.689-2.617c0-.851.306-1.581.848-2.098.374-.357.837-.59 1.338-.7.103-.44.306-.919.627-1.343M7.57 5.83c-.783 0-1.427.597-1.5 1.36a.75.75 0 0 1-1.493-.143 3.007 3.007 0 0 1 6 .29.75.75 0 0 1-1.5 0c0-.833-.675-1.508-1.507-1.508"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.798 7.806a.434.434 0 0 0-.434.434.75.75 0 1 1-1.5 0 1.934 1.934 0 0 1 3.748-.671.75.75 0 1 1-1.406.52.43.43 0 0 0-.408-.283M13.59 13.493a.75.75 0 0 1 .41.978l-.989 2.413h.565a.952.952 0 0 1 .927 1.168l.787-.898h-.44a.952.952 0 0 1-.88-1.313l.771-1.811a.75.75 0 0 1 1.38.588l-.441 1.036h.818a.952.952 0 0 1 .716 1.58l-.564-.495.564.495-3.128 3.57c-.664.758-1.896.1-1.636-.873l.413-1.547h-.668a.952.952 0 0 1-.884-1.306l1.301-3.176a.75.75 0 0 1 .979-.41M8.413 14.652a.75.75 0 0 1 .404.98l-.302.725h1.151a.75.75 0 0 1 .684 1.056l-.902 2.017a.75.75 0 0 1-1.37-.613l.43-.96H7.392a.75.75 0 0 1-.693-1.038l.734-1.763a.75.75 0 0 1 .981-.404"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunRainyOutline;