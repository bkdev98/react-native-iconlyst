import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHurricaneOutline = ({
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
      d="M6.309 2.847c1.278-.375 2.999-.597 4.868-.597s3.591.222 4.869.597c.634.186 1.202.423 1.628.719.404.28.84.73.84 1.369 0 .638-.436 1.088-.84 1.369-.426.296-.994.532-1.628.718-1.278.376-3 .598-4.869.598-1.87 0-3.59-.222-4.868-.598-.635-.186-1.202-.422-1.628-.718-.404-.28-.84-.731-.84-1.37 0-.637.436-1.088.84-1.368.426-.296.994-.533 1.628-.719m-.976 2.139.001-.003zm.038-.051c.03-.032.08-.078.165-.137.24-.167.637-.348 1.195-.512 1.106-.325 2.678-.536 4.446-.536s3.34.211 4.446.536c.558.164.955.345 1.195.512.085.059.136.105.165.137-.029.032-.08.078-.165.137-.24.167-.637.347-1.195.511-1.106.325-2.678.537-4.446.537s-3.34-.212-4.446-.537c-.558-.164-.954-.344-1.195-.511a1 1 0 0 1-.165-.137m11.65.05v-.002zm0-.099v-.002zm-11.687 0v-.002zM5.282 11.349a.75.75 0 0 1 1.031-.248c.376.23 1.037.46 1.944.632.892.168 1.967.268 3.13.268a.75.75 0 0 1 0 1.5 18.7 18.7 0 0 1-3.408-.294c-.98-.185-1.847-.459-2.448-.827a.75.75 0 0 1-.249-1.031M18.03 15.154a.75.75 0 0 1-.41.978c-1.269.522-3.455.889-5.728.46a.75.75 0 0 1 .279-1.474c1.982.374 3.874.04 4.88-.373a.75.75 0 0 1 .979.409M19.004 7.24a.75.75 0 0 1 .916-.536c.607.16 1.158.372 1.576.647.39.256.841.69.841 1.328 0 .436-.217.781-.462 1.024-.242.241-.557.43-.89.582-.67.305-1.565.524-2.56.647-.599.074-2.766.322-5.436 0a.75.75 0 0 1 .18-1.489c2.494.3 4.524.068 5.072 0 .909-.112 1.64-.304 2.122-.523.2-.091.332-.176.411-.242a1 1 0 0 0-.103-.074c-.227-.15-.604-.31-1.131-.449a.75.75 0 0 1-.536-.915m1.848 1.519-.002-.004zm0-.16.002-.002zM5.59 14.923a.75.75 0 0 1-.406.98c-.35.145-.576.287-.702.404a1 1 0 0 0-.075.08c.02.025.055.065.121.119.174.142.472.305.91.46.87.31 2.128.535 3.587.591a.75.75 0 0 1-.058 1.5c-1.56-.061-2.978-.302-4.031-.677-.523-.186-.998-.42-1.356-.712-.352-.287-.688-.716-.688-1.282 0-.506.27-.904.575-1.184s.706-.504 1.144-.685a.75.75 0 0 1 .98.406m-1.203 1.43.001.003zm.001.063-.001.004z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.727 4.168a.75.75 0 0 1 .6.874c-.543 2.912.65 5.332 2.05 7.872q.13.237.263.476c1.288 2.322 2.683 4.836 2.316 7.705a.75.75 0 1 1-1.488-.19c.303-2.364-.855-4.46-2.208-6.91l-.197-.358c-1.388-2.52-2.862-5.376-2.211-8.87a.75.75 0 0 1 .874-.6m13.122.245a.75.75 0 0 1 .66.83c-.14 1.216-.083 2.52-.018 3.924l.003.062c.063 1.363.13 2.814-.01 4.246-.141 1.465-.5 2.94-1.312 4.344-.814 1.405-2.06 2.695-3.917 3.822a.75.75 0 1 1-.779-1.282c1.67-1.013 2.725-2.13 3.398-3.292.675-1.166.99-2.418 1.118-3.736.128-1.325.066-2.685.001-4.083v-.012c-.064-1.38-.13-2.807.026-4.163a.75.75 0 0 1 .83-.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHurricaneOutline;