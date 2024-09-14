import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBurgerBold = ({
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
      d="M2.424 8.483C3.486 4.844 7.302 2.25 11.727 2.25c4.424 0 8.24 2.595 9.303 6.233.448 1.536-.954 2.754-2.41 2.754H4.833c-1.457 0-2.858-1.218-2.41-2.754m9.303-2.846a.75.75 0 1 0 0 1.5h.08a.75.75 0 0 0 0-1.5zm3.77 1.412a.75.75 0 0 0 0 1.5h.08a.75.75 0 0 0 0-1.5zm-8.283.75a.75.75 0 0 1 .75-.75h.081a.75.75 0 1 1 0 1.5h-.081a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M2.344 17.678c0-.642.567-1.161 1.267-1.161h16.778c.7 0 1.267.52 1.267 1.16 0 2.25-1.99 4.073-4.445 4.073H6.788c-2.454 0-4.444-1.823-4.444-4.072M6.21 15.006c-.367.157-.79.252-1.316.252-.561 0-1.003-.109-1.382-.283-.31-.143-.57-.328-.767-.468l-.083-.059a.75.75 0 1 1 .863-1.227l.1.071c.202.143.34.24.513.32.177.081.404.146.756.146.333 0 .554-.057.725-.13.183-.08.336-.185.557-.343l.018-.013c.206-.147.477-.341.82-.488.367-.157.79-.253 1.316-.253s.95.095 1.316.253c.345.148.616.342.823.49l.015.011c.221.159.373.265.555.343.168.073.387.13.716.13.333 0 .554-.057.725-.13.184-.08.336-.185.558-.343l.017-.013c.206-.147.478-.341.821-.488.367-.157.79-.253 1.316-.253s.95.096 1.316.253c.344.147.614.34.82.488l.018.013c.221.158.374.264.558.342.17.073.391.131.724.131.625 0 .9-.193 1.297-.474a.75.75 0 1 1 .868 1.223c-.468.332-1.062.752-2.165.752-.526 0-.949-.096-1.315-.253-.344-.147-.615-.34-.821-.488l-.018-.013c-.22-.158-.374-.264-.557-.343a1.8 1.8 0 0 0-.725-.13c-.333 0-.554.057-.725.13-.184.08-.337.185-.558.343l-.017.013a4.3 4.3 0 0 1-.821.488c-.367.157-.79.252-1.316.252-.523 0-.945-.095-1.31-.252-.34-.148-.61-.34-.815-.488l-.02-.014c-.22-.157-.372-.263-.555-.342a1.8 1.8 0 0 0-.725-.13 1.8 1.8 0 0 0-.724.13c-.184.079-.337.185-.558.343l-.017.013c-.207.147-.478.34-.821.488"
    />
  </Svg>
);
export default IconlystBurgerBold;
